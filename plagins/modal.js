Element.prototype.appendAfter = function(el) {
    el.parentNode.insertBefore(this, el.nextSibling)
}

function _createModalFooter(buttons = []) {
    if (buttons.length === 0) {
        return ''
    }
    let wrap = document.createElement('div')
    wrap.classList.add('my-modal__footer')

    buttons.forEach(btn => {
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add(btn.type || 'btn') 
        $btn.onclick = btn.hendler
        wrap.appendChild($btn)
    })
    
    return wrap
}


function _createModal(options = {
    title: 'title',
    content: `<h3>modal window</h3><p>body text</p>`,
    closable: true,
    width: '500px',
    footerBtn: [],
}) {
    const modal = document.createElement('div')
    modal.classList.add('my-modal')
    modal.innerHTML = `
    
        <div class="my-modal__ovelay" data-close="close">
            <div class="my-modal__window" style="width: ${options.width}">
                <div class="my-modal__header">
                    <div class="my-modal__title">${options.title}</div>
                    <div class="my-modal__close" data-close="close">${options.closable ? '&times;' : ''}</div>
                </div>
                <div class="my-modal__main" data-content>
                    ${options.content || 'no text'}
                </div>
            </div>
        </div>
    `
    const footer = _createModalFooter(options.footerBtn)
    footer.appendAfter(modal.querySelector('[data-content]'))
    document.body.appendChild(modal)
    return modal
}


$.modal = function (options) {
    const ANIMATION_SPEED = 500
    let closing = false
    let destroyd = false
    const $modal = _createModal(options)
    const modal = {
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
    const listener = e => {
        e.target.dataset.close ? modal.close() : null
    }

    $modal.addEventListener('click', listener)
       
    

    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyd = true
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}