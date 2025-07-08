class update {
    getInfo() {
        return {
            id: 'update',
            name: '更新示例',
            blocks: [
                {
                    func: 'update',
                    text: '更新',
                    blockType: 'button',
                },
                {
                    opcode:'command',
                    text:'更新示例块',
                    blockType:'command',
                }
            ]
        }
    }
    async command() {
        alert('运行了更新示例块')
    }
    async update() {
        try {
            if (button2text == '更新') {
                button2text = '更新中';
                this.runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE");
                const url = '';
                this.runtime.extensionStorage.javascriptobfuscator = await require(url);
                button2text = '更新';
                this.runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE");
                alert("更新成功，版本： " + JavaScriptObfuscator.version);
            }
        } catch (e) {
            alert("更新失败 " + String(e));
            button2text = '更新';
            this.runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE");
        }
    }
}
Scratch.extensions.register(new update())
