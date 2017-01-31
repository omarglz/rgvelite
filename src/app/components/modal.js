class MyModal extends React.Component{
   // closeModal() {
   //  ModalManager.close;
   //  // enable scroll
   //  // document.body.style.overflow = "scroll";
   // }
   render(){
      const { url, onRequestClose } = this.props;
      return (
         <Modal
            onRequestClose={onRequestClose}
            effect={Effect.ScaleUp}>
            <div className="bg-blue">
              <i className="material-icons" onClick={ModalManager.close}>clear</i>
              <div className="cf tc">
                <img className="w-100 w-50-ns w-75-l" src={url} />
              </div>
            </div>
         </Modal>
      );
   }
}