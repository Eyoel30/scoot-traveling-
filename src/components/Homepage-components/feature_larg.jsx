import Button from "../common/buttonlink"

const buttonValue = { path: "/About", label: "Learn More", classname: "button" }

export default function _rFeatureLarg({ values }) {

  return (
    <>
      {values.map((value) => (
        <div className="wrapper fb-col feature-lg">

          <img className="feature-lg-img" src={value.image} width="445" height="445" alt={value.alt} />

          <div className="feature-lg-text">
            <h3 className="feature-lg-title">{value.header}</h3>
            <p className="feature-lg-descr">{value.content}</p>
            <Button button={buttonValue} />
          </div>

          <img className={value.arroclass_r} src={value.arrow_right} width={value.width_r} height={value.height_r} />
          <img className={value.arroclass_l} src={value.arrow_left} width={value.width_l} height={value.height_l} />
          
          <img src={value.circleimage} className={value.circleClass} width={value.width_c} height={value.height_c} />
          
        </div>
      )
      )}
    </>
  )
}