import Button from "../common/buttonlink"

const buttonValue = {path:"/About",label:"Learn More",classname:"button"}

export default function FeatureLarg({ values }) {

  return (
    <>
    {values.map((value) => (
        <div className="feature-lg">
          <img src={value.image} width="445" height="445" alt={value.alt} />
          <h3>{value.header}</h3>
          <p>{value.content}</p>
          <Button button={buttonValue}/>
        </div>
        )
      )}
    </>
  )
}