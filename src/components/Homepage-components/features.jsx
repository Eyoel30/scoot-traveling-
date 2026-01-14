import FeatureSmall from "./feature_small"
import FeatureLarg from "./feature_larg"
import { feature_small, feature_larg } from "../../data/feature_data"
import "./features.css"

export default function Features() {
  return (
    <section className="wrapper small features">
      <div className="gray-line desktop"></div>
      <h2 className="visually-hidden">Features</h2>
      <div className="features-sm">
        <div className="gray-line tablet"></div>
        <FeatureSmall values={feature_small} />
      </div>
      <div className="features-lg">
        <FeatureLarg values={feature_larg} />
      </div>
    </section>
  )
}
