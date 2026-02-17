import local from "../../assets/icons/locate.svg"
import scooter from "../../assets/icons/scooter.svg"
import ride from "../../assets/icons/ride.svg"
import telemetry from "../../assets/images/telemetry.jpg"
import nearyou from "../../assets/images/near-you.jpg"
import payment from "../../assets/images/payments.jpg"
import leftdownarrow from "../../assets/patterns/left-downward-arrow.svg"
import rightarrow from "../../assets/patterns/right-arrow.svg"
import circle from "../../assets/patterns/circle.svg"

export const feature_small = [
  {
    image: local, header: "Locate with app", content: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away."
  },
  {
    image: scooter, header: "Pick your scooter", content: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
  },
  {
    image: ride, header: "Enjoy the ride", content: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
  }

]

export const feature_larg = [
  {
    image: telemetry,alt:"woment holding a phone", header: "Easy to use riding telemetry", content: "The Scoot app is available with riding telemetry. This means it can show you your average peed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",  arrow_right:rightarrow, arroclass_r:"feature-lg-arrow-r", width_r:452, height_r:151,arrow_left:leftdownarrow, arroclass_l:"feature-lg-arrow-l", width_l:741, height_l:151,circleimage:circle,circleClass:"feature-lg-c",width_c:445, height_c:445
  },
  {
    image: nearyou,alt:"", header: "Coming to a city near you", content: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.", arrow_right:rightarrow, arroclass_r:"feature-lg-arrow-r", width_r:452, height_r:151, arrow_left:leftdownarrow, arroclass_l:"feature-lg-arrow-l", width_l:741, height_l:151
  },
  {
    image: payment,alt:"", header: "Zero hassle payments", content: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app.Need to pay later? No worries! You can defer payment for up to a month.", arrow_right:rightarrow, arroclass_r:"feature-lg-arrow-r", width_r:452, height_r:151,arrow_left:leftdownarrow, arroclass_l:"feature-lg-arrow-l", width_l:741, height_l:151
  }
]



/*
  <div class="wrapper fb-col feature-lg">
        <img class="feature-lg-img" src="/assets/images/telemetry.jpg" width="445" height="445"
          alt="woman holding a phone">

        <div class="feature-lg-text">
          <h3 class="feature-lg-title">Easy to use riding telemetry</h3>
          <p class="feature-lg-descr">The Scoot app is available with riding telemetry. This means it can show you your
            average speed, how long you've been using the scooter, your traveling distance,
            and many more things all in an easy to use app.
          </p>
          <a href="" class="button">Learn More</a>
        </div>

        <img class="feature-lg-arrow-r" src="/assets/patterns/right-arrow.svg" alt="" width="452" height="151">
        <img class="feature-lg-arrow-l" src="/assets/patterns/left-downward-arrow.svg" alt="" width="741" height="151">
        <img class="feature-lg-circle" src="/assets/patterns/circle.svg" alt="" width="445" height="445">
      </div>

      <div class="wrapper fb-col feature-lg">
        <img class="feature-lg-img" src="/assets/images/near-you.jpg" width="445" height="445"
          alt="woman holding a phone">

        <div class="feature-lg-text">
          <h3 class="feature-lg-title">Coming to a city near you</h3>
          <p class="feature-lg-descr">Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure
            to let us know if you want to see us in your hometown. We’re aiming to let our
            scooters loose on 23 cities over the coming year.
          </p>
          <a href="" class="button">Learn More</a>
        </div>

        <img class="feature-lg-arrow-r" src="/assets/patterns/right-arrow.svg" alt="" width="452" height="151">
        <img class="feature-lg-arrow-l" src="/assets/patterns/left-downward-arrow.svg" alt="" width="741" height="151">
        <img class="feature-lg-circle" src="/assets/patterns/circle.svg" alt="" width="445" height="445">

      </div>

      <div class="wrapper fb-col feature-lg">
        <img class="feature-lg-img" src="/assets/images/payments.jpg" width="445" height="445"
          alt="woman holding a phone">

        <div class="feature-lg-text">
          <h3 class="feature-lg-title">Zero hassle payments</h3>
          <p class="feature-lg-descr"> Our payment is as easy as one two three. We accept most credit cards and debit
            cards.
            You can also link your PayPal account inside the app. Need to pay later? No worries!
            You can defer payment for up to a month.</p>
          <a href="" class="button">Learn More</a>
        </div>

        <img class="feature-lg-arrow-r" src="/assets/patterns/right-arrow.svg" alt="" width="452" height="151">
        <img class="feature-lg-arrow-l" src="/assets/patterns/left-downward-arrow.svg" alt="" width="741" height="151">
        <img class="feature-lg-circle" src="/assets/patterns/circle.svg" alt="" width="445" height="445">

      </div>

*/ 