document.getElementById('secondary_content').style.display = 'none';


let mainContent = document.querySelector('#main_content');
let secondaryContent = document.querySelector('#secondary_content');

document.querySelector('.switch input').addEventListener('change', e => {
  mainContent.style.display = e.target.checked ? 'none' : 'block';
  secondaryContent.style.display = e.target.checked ? 'block' : 'none';
});
