function addressChange(check){
  console.log(check.checked)
  address.style.display = check.checked ? 'block' : 'none'
  let list = document.querySelectorAll('#address input');
  for (const l of list){
    l.disabled = !check.checked
  }
}