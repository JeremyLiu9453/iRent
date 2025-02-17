window.onload = function() {

    /* ============== Section (Rent car Introduction) ============== */ 
    
    // 點擊切換圖片/文字
    // document.getElementById('rent-car').onclick = showRentCarInfo;
    // document.getElementById('sub-car').onclick = showSubCarInfo;
    // document.getElementById('used-car').onclick = showUsedCarInfo;    

    // Hover 切換圖片/文字
    document.getElementById('rent-car').onmouseover = showRentCarInfo;
    document.getElementById('sub-car').onmouseover = showSubCarInfo;
    document.getElementById('used-car').onmouseover = showUsedCarInfo;    

    var Tt = document.getElementById('Text-title');
    var Tc = document.getElementById('Text-content');

    var rentCarImg = document.querySelector('#rent-car img');
    var subCarImg = document.querySelector('#sub-car img');
    var usedCarImg = document.querySelector('#used-car img');

    function resetImages() {
        rentCarImg.src = "pics/pic-rent-car-idle.svg";
        subCarImg.src = "pics/pic-sub-car-idle.svg";
        usedCarImg.src = "pics/pic-used-car-idle.svg";
    }

    function showRentCarInfo() {
        resetImages();
        rentCarImg.src = "pics/pic-rent-car-selected.svg";  // 變更圖片
        Tt.textContent = "iRent 共享汽機車 — 引領 24 小時自助租車新體驗"; // 變更標題
        Tc.innerHTML = "以「客戶為核心」的思維結合先進 iT 技術，提供 聰明 (Smart)、簡單 (Simple)、快速 (Speedy) 的租車流程。iRent 打破傳統租車模式，無縫融入日常生活，滿足用戶 碎片化用車需求，透過 便利、經濟、時尚 的方式，為大眾創造自由靈活的移動體驗。";
    }

    function showSubCarInfo() {
        resetImages();
        subCarImg.src = "pics/pic-sub-car-selected.svg"; // 變更圖片
        Tt.textContent = "iRent 訂閱車租賃，輕鬆駕馭自由生活";
        Tc.innerHTML =`
        <strong>免高額投入，省心用車 -- </strong>
        無需一次性購車支出，免去中古車買賣與折舊的煩惱。<br>

        <strong>彈性訂閱，隨時換車 -- </strong>
        按月支付租金，期間可自由選擇不同車型，滿足多元用車需求。<br>

        <strong>豐富車款，任您挑選 -- </strong>
        提供各類車型與方案，無論日常通勤或假日旅行皆有合適選擇。<br>

        <strong>擺脫束縛，自在駕馭 -- </strong>
        不被單一車型綁住，享受靈活與無憂的用車服務。`;
    }

    function showUsedCarInfo() {   
        resetImages();
        usedCarImg.src = "pics/pic-used-car-selected.svg"; // 變更圖片
        Tt.textContent = "iRent 精選中古車 — 彈性租賃與智慧選購";
        Tc.innerHTML = `
        <strong>優質車源，嚴選保證 -- </strong>
        所有車輛皆經過嚴格檢測與定期保養，提供您放心的駕駛體驗。<br>

        <strong>彈性租賃，輕鬆上路 -- </strong>
        提供靈活的租期選擇，短期長租皆適合，滿足您的多元需求。<br>

        <strong>汰換更新，隨時升級 -- </strong>
        iRent 汽車經營策略延伸至中古車服務，讓開過的車輛適時進行汰換，持續維持整體車輛新鮮度。<br>

        <strong>銷售服務，輕鬆購車 -- </strong>
        若想擁有心儀車款，我們提供透明價格與專業服務，讓您輕鬆選購高品質中古車。`;
    }

    // **輪播圖變更時更新公告內容**
    // function updateAnnouncement(event) {
    //     const announcements = [
    //         { date: "2025/01/08", text: "【公告】 恭喜您發財，事事都精彩" },
    //         { date: "2025/02/14", text: "【公告】 情人節快樂，愛情甜蜜" },
    //         { date: "2025/03/20", text: "【公告】 春天來了，萬物復甦" },
    //         { date: "2025/04/10", text: "【公告】 清明時節雨紛紛" }
    //     ];

    //     let index = event.to;
    //     document.getElementById('announcementDate').innerText = announcements[index].date;
    //     document.getElementById('announcementText').innerText = announcements[index].text;
    // }

    // var carousel = document.getElementById('discountCarouselExampleIndicators');
    // if (carousel) {
    //     carousel.addEventListener('slid.bs.carousel', updateAnnouncement);
    // }

    // // **MORE 按鈕點擊效果**

    // const images = ["toyota-bg.jpg", "toyota-bg.jpg", "toyota-bg.jpg", "toyota-bg.jpg"]
    // function changeImage(index) {
    //     let img = document.getElementById(`carouselImage${index + 1}`);
    
    //     // 先添加模糊與透明度效果
    //     img.classList.add("fade-out");
    
    //     setTimeout(() => {
    //         // 等待淡出結束後，替換圖片
    //         img.src = images[index];
    
    //         // 移除模糊與透明度效果，實現淡入
    //         img.classList.remove("fade-out");
    //     }, 1000); // 延遲 1 秒，與 transition 一致
    // }
    // function toggleMoreButton() {
    //     this.classList.toggle('active');
    // }

    // var moreButton = document.getElementById('moreButton');
    // if (moreButton) {
    //     moreButton.addEventListener('click', toggleMoreButton);
    // }

    // function updateAnnouncement(event) {
    //     let announcements = [
    //         { date: "2025/01/08", text: "【公告】 恭喜您發財，事事都精彩" },
    //         { date: "2025/02/14", text: "【公告】 情人節快樂，愛情甜蜜" },
    //         { date: "2025/03/20", text: "【公告】 春天來了，萬物復甦" },
    //         { date: "2025/04/10", text: "【公告】 清明時節雨紛紛" }
    //     ];

    //     let index = event.relatedTarget ? event.relatedTarget.getAttribute('data-bs-slide-to') : 0;
    //     index = parseInt(index, 10);

    //     if (index >= 0 && index < announcements.length) {
    //         document.getElementById('announcementDate').innerText = announcements[index].date;
    //         document.getElementById('announcementText').innerText = announcements[index].text;
    //     }
    // }

    // let carousel = document.getElementById('discountCarouselExampleIndicators');
    // if (carousel) {
    //     carousel.addEventListener('slid.bs.carousel', updateAnnouncement);
    // }

    // function toggleMoreButton() {
    //     this.classList.toggle('active');
    // }

    // let moreButton = document.getElementById('moreButton');
    // if (moreButton) {
    //     moreButton.addEventListener('click', toggleMoreButton);
    // }

    // **這裡是重點**
    showRentCarInfo(); // 預設執行，讓畫面一開始就顯示「iRent 共享汽機車」

    return false;
}

