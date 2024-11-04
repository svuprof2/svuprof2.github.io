var count = 1

function select(input) {
    if (count % 2 === 0) {
      document.getElementById(input.id).className = "used1"
      document.getElementById(input.id).textContent = "O"
    }
    else {
      document.getElementById(input.id).className = "used2"
      document.getElementById(input.id).textContent = "X"
    }
    count+=1
  }
