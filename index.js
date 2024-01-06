const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1 class='main-heading'>Congratulations</h1>;
    <div class='card'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='profile-img'
      />
      <h1 class='heading'>Kiran V</h1>
      <p class='paragrah'>
        Vishnu Institue of Computer Education and Technology,Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='watch-img'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
