export default function validaData(data) {

    const dateString = data.value;
    const [year, month, day] = dateString.split('-');
    const dataValue = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();

    const minBirthDate = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate()
      );

    const lowerBound = new Date('1900-01-01');

    if (dataValue < lowerBound || dataValue > minBirthDate || data.value == '') {
        data.classList.remove('is-valid');
        data.classList.add('is-invalid');
        console.log("Data inválida");

        return false;
    } else {
        data.classList.remove('is-invalid');
        data.classList.add('is-valid');
        console.log("Data válida");

        return true;
    }

}