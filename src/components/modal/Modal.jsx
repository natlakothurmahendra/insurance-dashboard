import styles from "./modal.module.css"
export const Modal = ({isopen, closeModal, children}) => {
    if(!isopen) return null
    function handleovelyaclick(){
        closeModal()
    }
    function stopPropagation(e) {
    e.stopPropagation();
  }
    return(
        <div className={styles.modalOverlay} onClick={handleovelyaclick}>
        <div className={styles.modalContainer} onClick={stopPropagation}>
        {children}
        </div>
        </div>
    )
}