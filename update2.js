class update {
    getInfo() {
        return {
            id: 'update',
            name: '更新示例',
            blocks: [
                {
                    opcode: 'update',
                    blockType: 'button',
                    text: '更新'
                },
                { opcode: 'before',blockType:'command',text:'更新前的块' }，
                { opcode: 'after',blockType:'command',text:'更新后的块' }，
            ]
        }
    }
    async before(){
        alert('运行了更新之前的块')
    }
    
    async update() {
        var pbak = prompt;
        window.prompt = function() {return ""};
        document.querySelector('[data-tip="扩展库"]').click();
        var exts = document.querySelectorAll('.gandi_library_extensionItemCard_2cnXl');
        var custom_ext = exts[exts.length - 1];
        custom_ext.querySelector("button").click();
        window.prompt = pbak;
        document.querySelector('[data-tip="代码"]').click();
    }
    
    async after() {
        alert('运行了更新之后的块')
    }
}
Scratch.extensions.register(new update());
