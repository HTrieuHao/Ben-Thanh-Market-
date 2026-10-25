document.addEventListener('DOMContentLoaded', function () {
  (function khoiTaoFaqThanhVien1() {
    const danhSachNutFaq = document.querySelectorAll('.faq-nut-hoi');
    if (!danhSachNutFaq || danhSachNutFaq.length === 0) {
      return;
    }
    danhSachNutFaq.forEach(function (nutHoi) {
      nutHoi.addEventListener('click', function () {
        const mucFaqHienTai = this.parentElement;
        const dangMo = mucFaqHienTai.classList.contains('dang-mo');
        const tatCaMucFaq = document.querySelectorAll('.faq-muc');
        tatCaMucFaq.forEach(function (muc) {
          muc.classList.remove('dang-mo');
          const icon = muc.querySelector('.faq-icon-trang-thai');
          if (icon) {
            icon.textContent = '+';
          }
        });
        if (!dangMo) {
          mucFaqHienTai.classList.add('dang-mo');
          const iconHienTai = mucFaqHienTai.querySelector('.faq-icon-trang-thai');
          if (iconHienTai) {
            iconHienTai.textContent = '−';
          }
        }
      });
    });
  })()
});
