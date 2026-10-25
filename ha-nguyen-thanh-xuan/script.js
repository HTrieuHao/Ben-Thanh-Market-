document.addEventListener('DOMContentLoaded', function () {
  (function khoiTaoBoLocThanhVien2() {
    const danhSachNutLoc = document.querySelectorAll('.nut-loc');
    const danhSachTheTraiNghiem = document.querySelectorAll('.the-trai-nghiem');
    if (!danhSachNutLoc || danhSachNutLoc.length === 0 || !danhSachTheTraiNghiem || danhSachTheTraiNghiem.length === 0) {
      return;
    }
    danhSachNutLoc.forEach(function (nutHienTai) {
      nutHienTai.addEventListener('click', function () {
        const danhMucChon = this.getAttribute('data-danh-muc');
        danhSachNutLoc.forEach(function (nut) {
          nut.classList.remove('dang-chon');
        });
        this.classList.add('dang-chon');
        danhSachTheTraiNghiem.forEach(function (the) {
          const danhMucCuaThe = the.getAttribute('data-danh-muc');

          if (danhMucChon === 'tat-ca' || danhMucCuaThe === danhMucChon) {
            the.classList.remove('an');
            the.classList.remove('the-an');
          } else {
            the.classList.add('an');
            the.classList.add('the-an');
          }
        });
      });
    });
  })()
});
