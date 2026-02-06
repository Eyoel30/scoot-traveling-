import Button from "../common/buttonlink"

const buttonValue = { path: "/About", label: "Learn More", classname: "button" }

export default function FeatureLarg({ values }) {

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
          {value.arrow && <img className={value.arroclass} src={value.arrow} width={value.width} height={value.height}/>}
        </div>
      )
      )}
    </>
  )
}