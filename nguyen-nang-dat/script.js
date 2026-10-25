document.addEventListener('DOMContentLoaded', function () {
  (function khoiTaoFormThanhVien3() {
    const formGopY = document.getElementById('formGopY') || document.getElementById('bieu-mau-lien-he');
    if (!formGopY) {
      return;
    }

    const truongHoTen = document.getElementById('hoTen');
    const truongEmail = document.getElementById('email');
    const truongDienThoai = document.getElementById('dienThoai');
    const truongChuDe = document.getElementById('chuDe');
    const truongNoiDung = document.getElementById('noiDung');
    const hopThanhCong = document.getElementById('hopThanhCong');
    function kiemTraEmailHopLe(email) {
      const dinhDangEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return dinhDangEmail.test(email.trim());
    }

    function kiemTraSoDienThoaiHopLe(soDienThoai) {
      const dinhDangSdt = /^0[0-9]{9}$/;
      return dinhDangSdt.test(soDienThoai.trim());
    }

    function baoLoi(oNhap, idThongBao, thongDiep) {
      if (!oNhap) return;
      oNhap.classList.add('co-loi');
      oNhap.classList.remove('hop-le');
      const theThongBao = document.getElementById(idThongBao);
      if (theThongBao) {
        theThongBao.textContent = thongDiep;
        theThongBao.classList.add('hien-thi');
      }
    }

    function xoaLoi(oNhap, idThongBao) {
      if (!oNhap) return;
      oNhap.classList.remove('co-loi');
      oNhap.classList.add('hop-le');
      const theThongBao = document.getElementById(idThongBao);
      if (theThongBao) {
        theThongBao.textContent = '';
        theThongBao.classList.remove('hien-thi');
      }
    }
    const danhSachTruong = [
      { oNhap: truongHoTen, idLoi: 'loiHoTen' },
      { oNhap: truongEmail, idLoi: 'loiEmail' },
      { oNhap: truongDienThoai, idLoi: 'loiDienThoai' },
      { oNhap: truongChuDe, idLoi: 'loiChuDe' },
      { oNhap: truongNoiDung, idLoi: 'loiNoiDung' }
    ];

    danhSachTruong.forEach(function (muc) {
      if (muc.oNhap) {
        muc.oNhap.addEventListener('input', function () {
          xoaLoi(muc.oNhap, muc.idLoi);
        });
        muc.oNhap.addEventListener('change', function () {
          xoaLoi(muc.oNhap, muc.idLoi);
        });
      }
    });
    formGopY.addEventListener('submit', function (suKien) {
      suKien.preventDefault(); // Ngăn chặn reload trang mặc định

      let hopLe = true;
      if (truongHoTen) {
        const giaTriHoTen = truongHoTen.value.trim();
        if (giaTriHoTen === '') {
          baoLoi(truongHoTen, 'loiHoTen', 'Vui lòng nhập họ và tên của bạn.');
          hopLe = false;
        } else if (giaTriHoTen.length < 2) {
          baoLoi(truongHoTen, 'loiHoTen', 'Họ và tên phải có ít nhất 2 ký tự.');
          hopLe = false;
        } else {
          xoaLoi(truongHoTen, 'loiHoTen');
        }
      }
      if (truongEmail) {
        const giaTriEmail = truongEmail.value.trim();
        if (giaTriEmail === '') {
          baoLoi(truongEmail, 'loiEmail', 'Vui lòng nhập địa chỉ email.');
          hopLe = false;
        } else if (!kiemTraEmailHopLe(giaTriEmail)) {
          baoLoi(truongEmail, 'loiEmail', 'Email không đúng định dạng (ví dụ: ban@domain.com).');
          hopLe = false;
        } else {
          xoaLoi(truongEmail, 'loiEmail');
        }
      }
      if (truongDienThoai) {
        const giaTriDienThoai = truongDienThoai.value.trim();
        if (giaTriDienThoai === '') {
          baoLoi(truongDienThoai, 'loiDienThoai', 'Vui lòng nhập số điện thoại liên hệ.');
          hopLe = false;
        } else if (!kiemTraSoDienThoaiHopLe(giaTriDienThoai)) {
          baoLoi(truongDienThoai, 'loiDienThoai', 'Số điện thoại phải gồm đúng 10 chữ số và bắt đầu bằng số 0.');
          hopLe = false;
        } else {
          xoaLoi(truongDienThoai, 'loiDienThoai');
        }
      }
      if (truongChuDe) {
        const giaTriChuDe = truongChuDe.value;
        if (giaTriChuDe === '') {
          baoLoi(truongChuDe, 'loiChuDe', 'Vui lòng chọn một chủ đề góp ý.');
          hopLe = false;
        } else {
          xoaLoi(truongChuDe, 'loiChuDe');
        }
      }
      if (truongNoiDung) {
        const giaTriNoiDung = truongNoiDung.value.trim();
        if (giaTriNoiDung === '') {
          baoLoi(truongNoiDung, 'loiNoiDung', 'Vui lòng nhập nội dung ý kiến hoặc câu hỏi của bạn.');
          hopLe = false;
        } else if (giaTriNoiDung.length < 10) {
          baoLoi(truongNoiDung, 'loiNoiDung', 'Nội dung góp ý cần chi tiết hơn (tối thiểu 10 ký tự).');
          hopLe = false;
        } else {
          xoaLoi(truongNoiDung, 'loiNoiDung');
        }
      }
      if (hopLe) {
        const tenNguoiGui = truongHoTen ? truongHoTen.value.trim() : 'bạn';
        const chuDeText = truongChuDe && truongChuDe.selectedIndex >= 0 ? truongChuDe.options[truongChuDe.selectedIndex].text : '';
        const emailNhan = truongEmail ? truongEmail.value.trim() : '';

        if (hopThanhCong) {
          hopThanhCong.innerHTML = `
            <strong>Cảm ơn bạn ${tenNguoiGui}!</strong><br>
            Ý kiến đóng góp về chủ đề <em>"${chuDeText}"</em> 
            đã được ghi nhận thành công. Nhóm sinh viên MMC403 sẽ phản hồi đến email <strong>${emailNhan}</strong> trong thời gian sớm nhất!
          `;
          hopThanhCong.style.display = 'block';
          hopThanhCong.classList.add('hien-thi');
        }

        formGopY.reset();

        danhSachTruong.forEach(function (muc) {
          if (muc.oNhap) {
            muc.oNhap.classList.remove('hop-le');
          }
        });

        if (hopThanhCong) {
          hopThanhCong.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  })()
});
