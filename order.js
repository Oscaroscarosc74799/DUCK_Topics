// 每個按鈕對應的元素 ID 陣列
const elementArrays = [
    ['subway', 'subway2','subway3','subway4'], // 第1個按鈕要顯示的物件ID
    ['salad', 'salad2','salad3','salad4'], // 第2個按鈕要顯示的物件ID
    ['other', 'other2','other3','other4']  // 第3個按鈕要顯示的物件ID
];

// 取得所有按鈕
const buttons = document.querySelectorAll('.showButton');

// 為每個按鈕添加點擊事件處理器
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // 取得當前按鈕對應的陣列索引
        const arrayIndex = this.getAttribute('data-array');

        // 隱藏所有元素
        const allElements = document.querySelectorAll('.targetElement');
        allElements.forEach(element => {
            element.style.display = 'none';
        });

        // 顯示對應的元素
        const targetElements = elementArrays[arrayIndex];
        targetElements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = 'grid';
            }
        });
    });
});
// 頁面加載後直接顯示第一組元素 (物件組合 1)
const firstGroup = elementArrays[0];
firstGroup.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = 'grid';
    }
});