// Phần dùng chung: header, footer và liên hệ theo trang
document.addEventListener('DOMContentLoaded', function () {

  (function khoiTaoNapHeaderFooter() {
    const headerContainer = document.getElementById('site-header');
    const footerContainer = document.getElementById('site-footer');

    const htmlHeaderGoc = `
<header class="phan-dau-trang">
  <div class="hop-header">
    <a href="./truong-kim-phuong/index.html" class="logo-thuong-hieu" title="Trang chủ Chợ Bến Thành">
      <img src="./images/logo-cho-ben-thanh.png" alt="Logo Chợ Bến Thành - Văn Hóa và Nhịp Sống" class="logo-anh-bieu-tuong">
      <div class="logo-chu">
        <h2>Chợ Bến Thành</h2>
        <span>Văn Hóa &bull; Nhịp Sống &bull; Di Sản</span>
      </div>
    </a>
    <nav class="thanh-dieu-huong" aria-label="Menu điều hướng chính">
      <ul>
        <li><a href="./truong-kim-phuong/index.html">Trang Chủ</a></li>
        <li><a href="./truong-kim-phuong/lich-su.html">Lịch Sử</a></li>
        <li><a href="./truong-kim-phuong/kien-truc.html">Kiến Trúc</a></li>
        <li><a href="./ha-nguyen-thanh-xuan/nhip-song.html">Nhịp Sống</a></li>
        <li><a href="./ha-nguyen-thanh-xuan/van-hoa-mua-sam.html">Mua Sắm</a></li>
        <li><a href="./ha-nguyen-thanh-xuan/am-thuc.html">Ẩm Thực</a></li>
        <li><a href="./nguyen-nang-dat/kham-pha.html">Khám Phá</a></li>
        <li><a href="./nguyen-nang-dat/thu-vien.html">Thư Viện</a></li>
        <li><a href="./nguyen-nang-dat/lien-he.html">Liên Hệ</a></li>
      </ul>
    </nav>
  </div>
</header>`;

    const htmlFooterGoc = `
<footer class="phan-chan-trang">
  <div class="khung-chua hop-footer">
    <div class="cot-footer">
      <h3>Chợ Bến Thành</h3>
      <p>Biểu tượng văn hóa, lịch sử và nhịp sống phương Nam. Đồ án môn học Thiết kế Web (MMC403) của nhóm sinh viên đam mê văn hóa truyền thống.</p>
      <p><strong>Địa chỉ:</strong> Đường Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh</p>
    </div>
    <div class="cot-footer">
      <h3>Các Chuyên Đề</h3>
      <ul>
        <li><a href="./truong-kim-phuong/lich-su.html">&bull; Dòng thời gian lịch sử</a></li>
        <li><a href="./truong-kim-phuong/kien-truc.html">&bull; Kiến trúc tháp đồng hồ & 4 cửa</a></li>
        <li><a href="./ha-nguyen-thanh-xuan/nhip-song.html">&bull; Nhịp sống ngày và đêm</a></li>
        <li><a href="./ha-nguyen-thanh-xuan/van-hoa-mua-sam.html">&bull; Văn hóa tiểu thương & mặc cả</a></li>
        <li><a href="./ha-nguyen-thanh-xuan/am-thuc.html">&bull; Thiên đường ẩm thực Bến Thành</a></li>
      </ul>
    </div>
    <div class="cot-footer">
      <h3>Thông Tin Liên Hệ</h3>
      <div id="thong-tin-thanh-vien" class="thong-tin-thanh-vien"></div>
    </div>
  </div>
  <div class="chan-trang-ban-quyen">
    &copy; 2026 Đồ Án MMC403 – Chợ Bến Thành: Văn Hóa và Nhịp Sống. Thiết kế phi thương mại phục vụ học tập.
  </div>
</footer>`;
    if (headerContainer) {
      fetch(new URL('./header.html', document.baseURI))
        .then(function (res) {
          if (!res.ok) throw new Error('Không thể tải header.html');
          return res.text();
        })
        .then(function (html) {
          headerContainer.innerHTML = html;
          capNhatMenuHienTai(headerContainer);
        })
        .catch(function () {
          headerContainer.innerHTML = htmlHeaderGoc;
          capNhatMenuHienTai(headerContainer);
        });
    }
    if (footerContainer) {
      fetch(new URL('./footer.html', document.baseURI))
        .then(function (res) {
          if (!res.ok) throw new Error('Không thể tải footer.html');
          return res.text();
        })
        .then(function (html) {
          footerContainer.innerHTML = html;
          hienThiLienHeThanhVien(footerContainer);
        })
        .catch(function () {
          footerContainer.innerHTML = htmlFooterGoc;
          hienThiLienHeThanhVien(footerContainer);
        });
    }
    function capNhatMenuHienTai(container) {
      const duongDan = window.location.pathname;
      const tatCaLink = container.querySelectorAll('.thanh-dieu-huong a');
      tatCaLink.forEach(function (link) {
        link.classList.remove('trang-hien-tai');
        const href = link.getAttribute('href');
        if (href && new URL(href, document.baseURI).pathname === duongDan) {
          link.classList.add('trang-hien-tai');
        }
      });
    }
  })();

  function hienThiLienHeThanhVien(container) {
    const noiDung = container.querySelector('#thong-tin-thanh-vien');
    if (!noiDung) return;

    const thanhVienTheoTrang = {
      'index.html': ['Trương Kim Phượng', '251A300518', 'truongkimphuong843@gmail.com'],
      'lich-su.html': ['Trương Kim Phượng', '251A300518', 'truongkimphuong843@gmail.com'],
      'kien-truc.html': ['Trương Kim Phượng', '251A300518', 'truongkimphuong843@gmail.com'],
      'nhip-song.html': ['Hà Nguyễn Thanh Xuân', '251A300408', 'xuanbui.021107@gmail.com'],
      'van-hoa-mua-sam.html': ['Hà Nguyễn Thanh Xuân', '251A300408', 'xuanbui.021107@gmail.com'],
      'am-thuc.html': ['Hà Nguyễn Thanh Xuân', '251A300408', 'xuanbui.021107@gmail.com'],
      'kham-pha.html': ['Nguyễn Năng Đạt', '241A301574', 'datnguyennang1165@gmail.com'],
      'thu-vien.html': ['Nguyễn Năng Đạt', '241A301574', 'datnguyennang1165@gmail.com'],
      'lien-he.html': ['Nguyễn Năng Đạt', '241A301574', 'datnguyennang1165@gmail.com']
    };

    const tenTrang = window.location.pathname.split('/').pop() || 'index.html';
    const thanhVien = thanhVienTheoTrang[tenTrang];
    if (!thanhVien) return;

    const dongTen = document.createElement('p');
    dongTen.textContent = thanhVien[0] + ' · ' + thanhVien[1];
    const dongEmail = document.createElement('p');
    const lienKetEmail = document.createElement('a');
    lienKetEmail.href = 'mailto:' + thanhVien[2];
    lienKetEmail.textContent = thanhVien[2];
    dongEmail.appendChild(lienKetEmail);
    noiDung.replaceChildren(dongTen, dongEmail);
  }

});
