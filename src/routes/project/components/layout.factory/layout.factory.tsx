import { PortfolioImageFullWidth } from "./portfolio_image_full_width/portfolioImageFullWidth";
import { PortfolioDescriptionClient } from "./portfolio_description_client_project/portfolioDescriptionClient";
import { PortfolioDescriptionProject } from "./portfolio_description_project/portfolioDescriptionProject";
import { PortfolioImagePadding } from "./portfolio_image_padding/portfolioImagePadding";
import { PortfolioDescriptionBis } from "./portfolio_description_bis/portfolioDescriptionBis";
import { PortfolioPdf } from "./portfolio_pdf/portfolioPdf";

const layouts = {
  'portfolio_image_full_width': PortfolioImageFullWidth,
  'portfolio_description_client_project': PortfolioDescriptionClient,
  'portfolio_description_project': PortfolioDescriptionProject,
  'portfolio_image_padding': PortfolioImagePadding,
  'portfolio_description_bis': PortfolioDescriptionBis,
  'portfolio_pdf': PortfolioPdf,

} as const

export default function LayoutsFactory({ name, ...props }: { name: keyof typeof layouts }) {
  const Component = layouts[name]
  if (Component !== undefined) {
    return <Component {...props} />
  }
  return null
}