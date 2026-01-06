// 简单的表单提交功能
document.querySelector('.btn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    if(name && message) {
        const messagesContainer = document.querySelector('.messages');
        const newMessage = document.createElement('div');
        newMessage.className = 'message-item';
        
        const today = new Date();
        const dateStr = today.getFullYear() + '-' + 
                       (today.getMonth() + 1).toString().padStart(2, '0') + '-' + 
                       today.getDate().toString().padStart(2, '0');
        
        newMessage.innerHTML = `
            <div class="message-header">
                <span class="message-author">${name}</span>
                <span class="message-date">${dateStr}</span>
            </div>
            <p>${message}</p>
        `;
        
        messagesContainer.prepend(newMessage);
        
        // 清空表单
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
        
        alert('留言提交成功！');
    } else {
        alert('请填写完整的留言信息！');
    }
});

// 平滑滚动（锚点跳转）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});