import { Fragment, useContext, useEffect, useState } from "react"
import { showadd2whelInsForDet, updatePolicy } from "../api/apiService";
import { InputField } from "../components/formComponents/InputField";
import { Button } from "../components/Button";
import { AuthContext } from "../utils/Context";
import { PolicyCard } from "../components/policyCard/PolicyCard";
import styles from "./cssModules/selectPlan.module.css"
import { showPolicies } from "../api/policyapi";
import { Modal } from "../components/modal/Modal";

export const SelectPlans = () => {
   
    const  {edit, setEdit, editData, setEditData, isChecked, setIschecked} = useContext(AuthContext);

    const [show2wheinsufordeta, setShow2wheinsufordeta] = useState([]);
   const [showploicies, setshowploci] = useState([])
const [showModal, setShowModal] = useState(false);
    useEffect(() => {
      fetchandshow()
    },[])
    
   async function fetchandshow(){

    try{
        const res = await showadd2whelInsForDet()
        const polires = await showPolicies()
        
        if(!res || !polires){
            console.log("some error at if")
        }
        setShow2wheinsufordeta(res.data)
        setshowploci(polires.data)
    }catch (err){
 console.log(err)
    }

    }

    async function handleSave(id){
        try{
        await updatePolicy(id, editData)
        setEdit(null)
        }catch{

        }
    }

    function runandshowmodal(){
       setShowModal(true)
    }
    return(
        <div className={styles.container}>
            { showModal && <>
            <Modal isopen={showModal} closeModal={() => setShowModal(false)}>
                <h2>Sorry! We will need your engine and chassis number to proceed further.</h2>
                <p>Please enter the below to re-verify vehicle type.</p>
                <InputField placeholder="Engine number"/>
                <InputField placeholder="Chassis number"/>
                <Button buttontext="pay"></Button>
            </Modal>
            </>}
        <div>
        <InputField type="checkbox" checked={isChecked} onChange={(e) => setIschecked(e.target.checked)}/>
        
        {show2wheinsufordeta.map((each) => (
            <Fragment key={each.id}>
                <Button buttontext="edit" onClick={() => {setEdit(each.id); setEditData(each)}}/>
                <Button buttontext="save" onClick={() => handleSave(each.id)}/>
            <table >
                <tbody>
                <tr>
                    <td>Vehicle Number :</td>
                    <td>{edit === each.id ? (<InputField value={editData.vehicleNum} onChange={(e) => 
                    setEditData({...editData, vehicleNum:e.target.value})}/>) : 
                    (`${each.vehicleNum} ${isChecked ? "..." : "" }`)}
                    </td>
                </tr>
                <tr>
                    <td>Mobile Number</td>
                    <td>{each.mobileNum}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{each.email}</td>
                </tr>
                </tbody>
            </table>
            </Fragment>
        ))}
        </div>
        <div className={styles.policyWrapper}>
            <div className={styles.checkboxrow}>
            <InputField type="checkbox" value={isChecked} onChange={(e) => setIschecked(e.target.checked)}/>
            <InputField type="checkbox"/>
            </div>
            <div className={styles.cardboxrow}>
            <PolicyCard h3text="No Frills" p3text="Covers basic bike repair cost without depreciaiton waiver"
             spantext={isChecked ? showploicies.map((each) => <p key={each.id}>₹ {each.premium}</p>) : ""} h4text="Benifits" liItems={["one", "two"]}/>
             <PolicyCard h3text="Zero Dep" p3text="Includes Zero Depreciation add-on and secures your bike from devaluation"
             spantext="266" h4text="4 Benifits" liItems={["one", "two"]}/>
             </div>
             <Button buttontext="pay" onClick={runandshowmodal}/>
             </div>
        </div>
    )
}