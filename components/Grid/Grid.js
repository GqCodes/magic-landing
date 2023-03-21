export default function Grid() {
  return (
    <section className='grid-container'>
      <h2>
        {/* Get ready for a world-class experience at the Amway Center in Orlando. */}
        Enter the world of award-winning entertainment at the Amway Center.
        {/* Visit the award-winning <br /> Amway Center in downtown Orlando, featuring: */}
      </h2>
      <div className='row'>
        <div className='col-4 grid-card'>
          <img
            src='https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/ibmig/cms/image/wesh/13246696-13246696.jpg?resize=900:*'
            alt=''
          />
          <p>
            Unique bars and restaurants including Jernigan’s, where delicious dining meets game-day thrills
            {/* a fine dining experience where you can
            enjoy a delicious meal while overlooking the game from the comfort of your table */}
          </p>
        </div>
        <div className='col-4 grid-card'>
          <img src='https://cdn.nba.com/teams/uploads/sites/1610612753/2022/04/team-shop-21.jpg' alt='' />

          <p>The Team Shop featuring Orland Magic apparel and souvenirs</p>
        </div>
        <div className='col-4 grid-card'>
          <img src='https://www.orlandoattractions.com/2019/wp-content/uploads/2019/07/Magis-StuffsCastle.jpg' alt='' />

          <p>STUFF’s Magic Castle: an indoor children’s playground</p>
        </div>
      </div>

      <div className='row'>
        <div className='col-4 grid-card'>
          <img src='https://cdn.nba.com/teams/uploads/sites/1610612753/2022/06/01-founders_suite_1.jpg' alt='' />

          <p>VIP Seating and Luxury Suites</p>
        </div>
        <div className='col-4 grid-card'>
          <img src='https://www.sportsbusinessjournal.com/-/media/Images/Daily/2022/03/14/MB-Amway-Center/Magic-2.ashx' alt='' />

          <p>Interactive areas for the entire family</p>
        </div>
        <div className='col-4 grid-card'>
          <img
            src='https://www.attractiontickets.com/sites/default/files/styles/news_content_desktop/public/2022-09/orlando-magic-fans.jpg?itok=xiODcuCx'
            alt=''
          />

          <p>Discounts and exclusive experiences for groups of 10+</p>
        </div>
      </div>
    </section>
  );
}
