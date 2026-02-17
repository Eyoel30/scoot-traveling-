import FeatureSmall from "./feature_small"
import FeatureLarg from "./feature_larg"
import { feature_small, feature_larg } from "../../data/feature_data"
import "./features.css"

export default function Features() {
  return (
    <>
      <section className="wrapper small features-sm">

        <div className="gray-line desktop-large"></div>
        <h2 className="visually-hidden">Features</h2>
        <div className="features-sm-grid">
          <div className="gray-line desktop-small"></div>
          <div className="gray-line tablet"></div>
          <FeatureSmall values={feature_small} />
        </div>

      </section>

      <section className="features-lg">
        <FeatureLarg values={feature_larg} />
      </section>
    </>
  )
}
