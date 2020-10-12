// function _createModal(options) {
//     const modal = document.createElement('div')
//     modal.classList.add('my-modal')
//     modal.insertAdjacentHTML('afterbegin', `
//     <div class="my-modal__ovelay">
//         <div class="my-modal__window">
//             <div class="my-modal__header">
//                 <div class="my-modal__title">modal title</div>
//                 <div class="my-modal__close">&times;</div>
//             </div>
//             <div class="my-modal__main">
//                 <p>
//                     Lorem ipsum dolor sit amet.
//                 </p>
//                 <p>
//                     Lorem ipsum dolor sit amet.
//                 </p>
//             </div>
//             <div class="my-modal__footer">
//                 <button>ok</button>
//                 <button>cancel</button>
//             </div>
//         </div>
//     </div>`
//     )
//     document.body.appendChild(modal)
//     return modal
// }
let opt = {
    title: 'modal title',
    content: 'body',
    closable: true,
}


function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('my-modal')
    modal.innerHTML = `
    
        <div class="my-modal__ovelay">
            <div class="my-modal__window">
                <div class="my-modal__header">
                    <div class="my-modal__title">modal title</div>
                    <div class="my-modal__close">&times;</div>
                </div>
                <div class="my-modal__main">
                    <p>
                        Lorem ipsum dolor sit amet.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div class="my-modal__footer">
                    <button>ok</button>
                    <button>cancel</button>
                </div>
            </div>
        </div>
    
    `
    document.body.appendChild(modal)
    return modal
}


$.modal = function (options) {
    const ANIMATION_SPEED = 500
    let closing = false
    const $modal = _createModal(options)
    return {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
        destroy() {

        },
    }
}