const modal = $.modal({
    title: 'modal test',
    content: `<h3>modal test</h3><p>body text test</p>`,
    closable: true,
    width: '500px',
    footerBtn: [
        {text: 'ok', type: '', hendler() {
            modal.close()
        }},
        {text: 'cancel', type: '', hendler() {
            modal.close()
        }},  
    ]
})