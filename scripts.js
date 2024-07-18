// konstanta
const tinggiBadan = document.getElementById('input-tinggi-badan');
const usia = document.getElementById('input-usia');
const beratbadan = document.getElementById('input-berat-badan');
const bmiResultElement = document.querySelector('.bmi-result');
const kategoriBmielement = document.querySelector('.kategori-bmi');
const dataUserElement = document.querySelector('.data-user .usia');
const jenisKelaminElement = document.querySelector('.data-user .jenis-kelamin');

// Hasil BMI
function klasifikasiBmi(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan Berat Badan";
    } else if (bmi < 25) {
        return "Normal (Ideal)";
    } else if (bmi < 30) {
        return "Kelebihan Berat Badan";
    } else {
        return "Kegemukan (Obesitas)";
    }
}

// Perhitungan dan hasil pada html page 
function hitungBmi(event) {
    event.preventDefault();

    const tbad = parseFloat(tinggiBadan.value) / 100;
    const bbad = parseFloat(beratbadan.value);
    const usi = parseInt(usia.value, 10);
    const jenisKelamin = document.querySelector('input[name="jeniskelamin"]:checked');

    if (isNaN(tbad) || isNaN(bbad) || isNaN(usi) || tbad > 3 || bbad > 200 || !jenisKelamin) {
        alert('Pastikan semua input terisi dengan benar');
        return;
    }
    
    let bmi = bbad / (tbad * tbad);
    bmi = bmi.toFixed(1);

    bmiResultElement.textContent = bmi;
    kategoriBmielement.textContent = `${klasifikasiBmi(parsefloat(bmi))}`;
    dataUserElement.textContent = `$(usi)`;
    jenisKelaminElement.textContent = jenisKelamin.value;
    alert('Berhasil, silahkan lihat hasil pada bagian BMI')
}

// Reset Button 
function resetForm() {
    document.getElementById('bmi-form').reset();
    bmiResultElement.textContent = '0.0';
    kategoriBmielement.textContent = '';
    dataUserElement.textContent = '';
    jenisKelaminElement.textContent = '';
}

// Event Submit dan Reset 
document.getElementById('bmi-form').addEventListener('submit',hitungBmi);
document.getElementById('reset-button').addEventListener('click',resetForm);