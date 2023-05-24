const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )}%`;
};

setGaugeValue(gaugeElement, 0.7);
/////////////////////////////////////////////////////////

const gaugeElementt = document.querySelector(".gauge2");

function setGaugeValue2(gauge2, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge2.querySelector(".gauge__fill2").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge2.querySelector(".gauge__cover2").textContent = `${Math.round(
    value * 100
  )}%`;
};

setGaugeValue2(gaugeElementt, 0.8);
/////////////////////////////////////////////////////////

const gaugeElementt3 = document.querySelector(".gauge3");

function setGaugeValue3(gauge3, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge3.querySelector(".gauge__fill3").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge3.querySelector(".gauge__cover3").textContent = `${Math.round(
    value * 100
  )}%`;
};

setGaugeValue3(gaugeElementt3, 0.5);




