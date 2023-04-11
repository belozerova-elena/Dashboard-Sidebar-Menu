const navigation = document.querySelector('.nav');
const toggle = document.querySelector('.toggle');

toggle.onclick = function(){
  navigation.classList.toggle('active');
}