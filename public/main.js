var trash = document.getElementsByClassName("fa-trash");
const orderItem = document.querySelectorAll(".orderItem");
if (orderItem.length > 0)
orderItem.forEach(order => order.addEventListener('click', markCompleted));

function markCompleted(click) {
  console.log(click.currentTarget.innerText);
  // click.currentTarget.classList.toggle('done')
  fetch('messages', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': click.currentTarget.innerText,
      'order': click.currentTarget.innerText,
      'size': click.currentTarget.innerText,
      'completed': click.currentTarget.classList.contains('done')
    })
  }).then(function() {
    window.location.reload()
  })
}


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const order = this.parentNode.parentNode.childNodes[3].innerText
        const size = this.parentNode.parentNode.childNodes[5].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'order': order,
            'size': size
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});


