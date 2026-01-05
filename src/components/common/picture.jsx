export default function Picture({source = [], pic=[], pclass } ) {
  return (
    <>
      <picture className={pclass}>
        {source.map((s, index) => (
          <source key={index} media={`(width >= ${s.media}rem)`} srcSet={s.srcSet} width={s.width} height={s.height} />
        ))}
        <img src={pic.src} alt={pic.alt} className={pic.className} width={pic.width} height={pic.height}/>
      </picture>
    </>
  )
}