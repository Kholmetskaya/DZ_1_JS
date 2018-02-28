// Площадь круга, где r - радиус окружности круга, s - площадь.
var r = 5;
var s = Math.PI * Math.pow(r,2);
// округляем результат до сотых
sCircle = (Math.round((s)*100)/100);
console.log(sCircle);