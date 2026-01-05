export default function FeatureSmall({ values }) {
  return (
    <> 
    {values.map((value) => (
        <div className="feature-sm">
          <img className="feature-sm-img" src={value.image} width="96" height="96"/>
          <h3 className="feature-sm-title">{value.header}</h3>
          <p className="feature-sm-descr">{value.content}</p>
        </div>
        )
      )}
    </>
  )
}