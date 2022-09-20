function hitung(btn) {
  var frm = document.getElementById("calcForm");
  var a1 = parseFloat(frm.angka1.value);
  var a2 = parseFloat(frm.angka2.value);

  switch (btn) {
    case "tambah":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap Masukan Angka");
      } else {
        var hitung = a1 + a2;
        frm.hasil.value = hitung;
      }
      break;
    case "kurang":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap Masukan Angka");
      } else {
        var hitung = a1 - a2;
        frm.hasil.value = hitung;
      }
      break;
    case "kali":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap Masukan Angka");
      } else {
        var hitung = a1 * a2;
        frm.hasil.value = hitung;
      }
      break;
    case "bagi":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap Masukan Angka");
      } else {
        var hitung = a1 / a2;
        frm.hasil.value = hitung;
      }
      break;
    case "pangkat":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap Masukan Angka");
      } else {
        var hitung = Math.pow(a1, a2);
        frm.hasil.value = hitung;
      }
      break;

    default:
      break;
  }
}
