import type { ProjectFilterId } from "./projectFilters";
import type { TagVariant } from "./tagVariants";

export type ThumbnailType =
  | "infrastructure"
  | "dataQuality"
  | "manufacturing"
  | "concorde"
  | "drone";

export type MetricTone = "blue" | "coral" | "green";

export interface ProjectMetricCallout {
  label: string;
  value: string;
  tone: MetricTone;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  workspaceLabel: string;
  filterId: Exclude<ProjectFilterId, "all">;
  tagVariant: TagVariant;
  skillTags: string[];
  shortDescription: string;
  problem: string;
  approach: string[];
  tools: string[];
  keyInsights: string;
  outcome: string;
  thumbnail: ThumbnailType;
  /** When set, modal shows “Project Story” instead of “The problem”. */
  projectStory?: string;
  /** When set, modal renders approach as a paragraph instead of bullets. */
  approachParagraph?: string;
  /** When set, modal renders key insights as a bullet list. */
  keyInsightBullets?: string[];
  /** Optional highlighted metrics shown in the modal. */
  metricCallouts?: ProjectMetricCallout[];
  /** One-line summary below the modal title. */
  modalSummary?: string;
  /** Second outcome block labeled as proposed recommendations. */
  proposedRecommendations?: string;
  /** Optional heading for the recommendations block (default: Proposed recommendations). */
  recommendationsHeading?: string;
  /** Optional disclaimer shown above recommendation text. */
  recommendationsDisclaimer?: string;
  /** Terms to subtly emphasize in paragraph text. */
  highlightTerms?: string[];
  /** Subtle label under the modal title (e.g. course → final project). */
  progressionLabel?: string;
  /** When set, modal footer shows an external KPI dashboard link. */
  kpiDashboardUrl?: string;
}

export const projects: Project[] = [
  {
    id: "road-infrastructure",
    title: "Municipal Road-Paving Operations Optimization",
    category: "Operations & Project Management",
    workspaceLabel: "Operations & Project Management",
    filterId: "operations",
    tagVariant: "blue",
    skillTags: [
      "Project Scheduling",
      "Resource Allocation",
      "Data-Driven Decision Support",
    ],
    shortDescription:
      "Analyzed city-wide paving schedules and resource constraints, then extended the work into an interactive KPI web app for operational decision support.",
    modalSummary:
      "Analyzed city-wide paving schedules and resource constraints, then extended the work into an interactive KPI web app for operational decision support.",
    problem:
      "Overlapping schedules and geographic dependencies created prolonged closures, uneven crew utilization, and delays across districts.",
    projectStory:
      "Municipal road-paving operations involve multiple districts, treatment types, crews, timelines, and geographic dependencies. When projects overlap or are scheduled without considering nearby work, they can create prolonged closures, traffic disruption, uneven resource utilization, and delays.\n\nAs a course project, I analyzed an open-data paving dataset to evaluate lead times, district-level performance, treatment durations, workflow status, spatial concentration, and overlapping projects. The analysis identified lead times ranging from approximately 16 to 30+ days, district-level differences, high-activity areas, and potential bottlenecks in scheduling and crew allocation.\n\nThe project was later continued as a final project. The analysis was extended into an interactive web app that allowed users to navigate operational KPIs, filter projects by date, treatment type, and district, and access automated insights through an AI-powered analytics chatbot.",
    approach: [],
    approachParagraph:
      "The project progressed from analysis to decision-support product development. The dataset was cleaned and structured, project lead times were calculated, and performance was compared across districts and treatment types.\n\nKanban-style workflow views were created to classify projects as upcoming, in progress, or completed. Geographic analysis was used to identify project clusters, areas of overlapping activity, and potential traffic-disruption risks. Temporal relationships between projects were evaluated to identify scheduling conflicts and parallel work opportunities.\n\nThe final-project extension converted the analysis into an interactive web app with KPI navigation, filters, and an AI-powered analytics chatbot.",
    tools: [
      "Lead-time analysis",
      "District-level performance comparison",
      "Treatment-duration analysis",
      "Kanban workflow dashboards",
      "Geospatial heatmaps",
      "Spatial clustering",
      "ZIP-code and block-group analysis",
      "Temporal overlap analysis",
      "Resource-utilization modeling",
      "Crew-allocation analysis",
      "Interactive KPI dashboard",
      "Date, district, and treatment filters",
      "AI-powered analytics chatbot",
      "Data-driven scheduling recommendations",
    ],
    keyInsights:
      "Lead times, workflow visibility, and geospatial patterns revealed scheduling and coordination opportunities across districts.",
    keyInsightBullets: [
      "Project lead times varied across districts, with some areas exceeding 30 days.",
      "Sealing projects averaged approximately 27.74 days, longer than resurfacing projects.",
      'A large number of projects appeared in the "In Progress" stage, suggesting a heavy active workload or potential project closeout bottlenecks.',
      "Central and southern areas showed higher concentrations of paving activity.",
      "Overlapping projects created opportunities for parallel work but also increased the need for better crew coordination.",
      "Kanban views improved workflow visibility across upcoming, active, and completed work.",
      "Geospatial filters made it easier to assess activity by district and neighborhood.",
      "The web app made operational KPIs easier to navigate and interpret.",
      "The AI-powered chatbot made it easier for stakeholders to query operational data and receive automated insights.",
    ],
    metricCallouts: [
      { label: "Lead time range", value: "16–30+ days", tone: "blue" },
      { label: "Sealing avg. duration", value: "27.74 days", tone: "coral" },
    ],
    outcome:
      "The course project produced a data-driven assessment of municipal road-paving operations and identified scheduling, coordination, and resource-allocation improvements.\n\nThe final-project extension transformed the analysis into an interactive web app that enabled users to navigate key KPIs, filter projects by date, treatment type, and district, explore project status and geographic concentration, identify potential scheduling conflicts, and query operational data through an AI-powered analytics chatbot.\n\nThe combined work demonstrates how raw operational data can be transformed into workflow visibility, scheduling recommendations, and accessible decision-support tools.",
    thumbnail: "infrastructure",
  },
  {
    id: "drone-delivery",
    title: "Drone-Based Delivery System",
    category: "Project Management",
    workspaceLabel: "Project Management",
    filterId: "program",
    tagVariant: "blue",
    skillTags: [
      "Project Scheduling",
      "Risk Management",
      "Cost & Resource Planning",
    ],
    shortDescription:
      "Developed an end-to-end project plan for a drone delivery service, aligning scope, schedule, cost, risk, and pilot readiness.",
    problem:
      "Last-mile delivery can be slowed by traffic, rising operating costs, and the need to transport time-sensitive packages quickly and reliably.",
    projectStory:
      "Last-mile delivery can be slowed by traffic, rising operating costs, and the need to transport time-sensitive packages quickly and reliably. This project explored the planning and feasibility of a drone-based delivery system designed for lightweight urban and semi-urban deliveries.\n\nI helped develop a structured project plan covering the delivery workflow, technical requirements, operations model, cost baseline, safety considerations, risk responses, and pilot implementation strategy. The goal was to translate a complex logistics concept into an organized plan with clear dependencies, milestones, responsibilities, and measures of success.",
    approach: [],
    approachParagraph:
      "The project was organized around a defined scope baseline and six core deliverables: the service model, drone specifications, delivery workflow, operations plan, risk and compliance plan, and pilot implementation plan.\n\nA Work Breakdown Structure was used to divide the project into manageable activities. These activities were sequenced through a network diagram to identify dependencies and determine the critical path. The project plan covered a 12-week window, while the critical path analysis identified a 10-week sequence of activities that directly influenced completion timing.\n\nCost, safety, quality, communication, and procurement considerations were integrated into the planning process.",
    tools: [
      "Work Breakdown Structure and WBS Dictionary",
      "Activity Network Diagram",
      "Critical Path Analysis",
      "Scope, Schedule, and Cost Baselines",
      "Risk Response Matrix",
      "RACI Responsibility Framework",
      "Stakeholder Communication Plan",
      "Quality Checklists and Pilot KPIs",
      "Collaborative documentation and project-tracking tools",
    ],
    keyInsights:
      "Dependencies, critical path timing, contingency planning, and pilot readiness measures shaped the overall delivery plan.",
    keyInsightBullets: [
      "Dependencies between system design, operations planning, simulation, and financial analysis influenced the delivery timeline.",
      "Critical path analysis identified activities where delays could affect the full project.",
      "A 10% contingency reserve provided flexibility for cost and implementation uncertainty.",
      "Technical, regulatory, weather, supplier, and communication risks required both mitigation and contingency plans.",
      "A successful pilot required clear measures for delivery accuracy, stability, safety, and operational readiness.",
    ],
    outcome:
      "The project produced a comprehensive management plan for a proposed drone delivery system, including a 12-week implementation plan, a 10-week critical path, a total estimated project cost of $590,260, a structured risk framework, defined safety checks, and a targeted 95% success rate for test-flight stability and delivery accuracy.",
    thumbnail: "drone",
  },
  {
    id: "manufacturing-simulation",
    title: "Integrated Production Planning Strategy",
    category: "Operations & Project Management",
    workspaceLabel: "Operations & Project Management",
    filterId: "operations",
    tagVariant: "blue",
    skillTags: [
      "Demand Forecasting",
      "Capacity Planning",
      "Production Scheduling",
    ],
    shortDescription:
      "Built a data-driven forecasting, production planning, capacity, and scheduling strategy to reduce backorders and control manufacturing costs.",
    modalSummary:
      "Built a data-driven forecasting, production planning, capacity, and scheduling strategy to reduce backorders and control manufacturing costs.",
    problem:
      "Rising demand, backorders, high WIP, delays, and declining profitability required better links between forecast and production decisions.",
    projectStory:
      "A manufacturing division was facing rising demand, frequent backorders, high work-in-process inventory, production delays, and declining profitability. The project focused on improving how demand was forecasted and translated into production, material, capacity, and scheduling decisions.\n\nUsing 20 weeks of historical demand data and information about bills of materials, machine capacity, processing times, setup times, and downtime, we developed an integrated five-week production plan. The analysis connected forecasting with aggregate planning, master production scheduling, material requirements planning, capacity planning, and manufacturing simulation.",
    approach: [],
    approachParagraph:
      "The project followed a product-by-product operations planning approach. Multiple forecasting methods were compared using historical demand data, and the most suitable model for each product was selected using Mean Absolute Deviation.\n\nLevel and chase production strategies were compared to balance labor, inventory, and backorder costs. A Master Production Schedule translated demand into production requirements, while a unified Material Requirements Plan coordinated shared sub-products, lead times, inventory, and lot-sizing requirements.\n\nCapacity bills and downtime-adjusted availability were used to estimate machine requirements. A seven-station manufacturing simulation was then used to evaluate utilization, queues, and workload distribution.",
    tools: [
      "Demand forecasting",
      "Moving averages",
      "Weighted moving averages",
      "Exponential smoothing",
      "Trend-adjusted forecasting",
      "Seasonal index forecasting",
      "Random Forest Regression",
      "Fourier forecasting",
      "Kalman forecasting",
      "Mean Absolute Deviation analysis",
      "Level and chase aggregate planning",
      "Master Production Scheduling",
      "Material Requirements Planning",
      "Bill of Materials analysis",
      "Capacity bills",
      "Downtime-adjusted capacity planning",
      "Discrete-event manufacturing simulation",
    ],
    keyInsights:
      "Forecast accuracy, materials coordination, capacity limits, and simulation together shaped a stronger operational planning view.",
    keyInsightBullets: [
      "Forecasting methods needed to be selected by product because each product had a different demand pattern.",
      "The best-performing models achieved MAD values ranging from approximately 1.15 to 3.5.",
      "Random Forest Regression improved one product’s MAD from 7.23 to 3.5 compared with the best traditional method.",
      "Seasonal and trend-based models performed better for products with recurring or upward demand patterns.",
      "Level and chase strategies should be applied selectively rather than uniformly.",
      "Two major workstations reached approximately 78% and 76% utilization, indicating potential bottlenecks.",
      "Retaining selected machines during demand declines reduced the risk of costly repurchases when demand increased again.",
      "Combining forecasting, materials planning, capacity planning, and simulation created a stronger operational decision framework.",
    ],
    metricCallouts: [
      { label: "Best MAD range", value: "1.15–3.5", tone: "blue" },
      { label: "Workstation utilization", value: "78%", tone: "green" },
      { label: "Workstation utilization", value: "76%", tone: "coral" },
    ],
    outcome:
      "The project produced an integrated production strategy designed to improve forecast accuracy, reduce operating costs, minimize inventory and backorders, and better align resources with demand.",
    recommendationsHeading: "Planning recommendations",
    recommendationsDisclaimer:
      "These were planning recommendations and modeled outcomes rather than results from a live production implementation.",
    proposedRecommendations:
      "The analysis recommended using advanced forecasting methods when traditional models were insufficient, applying level and chase strategies selectively, coordinating MPS and MRP activities, accounting for machine downtime, retaining selected machines when appropriate, and monitoring highly utilized workstations for potential bottlenecks.",
    thumbnail: "manufacturing",
  },
  {
    id: "am-error-detection",
    title: "Additive Manufacturing Error Detection Analysis",
    category: "Operational Data Analytics",
    workspaceLabel: "Operational Data Analytics",
    filterId: "analytics",
    tagVariant: "blue",
    skillTags: [
      "Data Quality Assessment",
      "Statistical Process Control",
      "Model Validation",
    ],
    shortDescription:
      "Evaluated whether manufacturing process data could support reliable and generalizable error detection.",
    problem:
      "Automated error detection depends on data quality, class balance, and consistent labels across print jobs.",
    projectStory:
      "Automated error detection can help manufacturers identify defects earlier, but machine-learning results are only as reliable as the data behind them. This project evaluated a large additive-manufacturing dataset to determine whether its process parameters could support error detection across different print jobs.\n\nRather than focusing only on model accuracy, the analysis examined class balance, parameter behavior, label consistency, thermal stability, and performance on unseen print geometries. The goal was to determine whether the data could support trustworthy operational decisions and identify structural issues that could lead to misleading results.",
    approach: [],
    approachParagraph:
      "The analysis followed a data-centric evaluation framework. The dataset was audited for missing values, invalid readings, and physically implausible values. Derived features were created for flow rate, feed rate, and hotend tracking error. Parameter relationships were examined using descriptive analysis and logistic regression.\n\nStatistical Process Control charts were used to evaluate thermal stability. Label consistency was assessed across print jobs using coefficient of variation, and leave-one-print-out validation was used to measure performance on unseen print geometries. The findings were consolidated into a dataset quality scorecard and recommendations.",
    tools: [
      "Data quality audit",
      "Feature engineering",
      "Logistic regression",
      "Statistical Process Control I-charts",
      "Pearson correlation analysis",
      "Coefficient of variation analysis",
      "Leave-One-Print-Out cross-validation",
      "Class-balance analysis",
      "Parameter-space coverage heatmaps",
      "Dataset quality scorecard",
      "Precision-Recall and AUC evaluation",
    ],
    keyInsights:
      "Class imbalance, label inconsistency, and weak cross-print validation limited the reliability of error detection using process parameters alone.",
    keyInsightBullets: [
      "The dataset had a severe 96:4 error-to-normal class imbalance, making accuracy unreliable.",
      "Flow rate and feed rate were the strongest predictors of the error label.",
      "Bed temperature provided little predictive value because it had limited variation.",
      "Similar nominal conditions produced different error rates across print jobs, indicating label inconsistency.",
      "Mean LOPO AUC was 0.662, and 43% of print-level evaluations fell below 0.60.",
      "Four of six dataset-quality dimensions fell below the 0.70 readiness target.",
      "The dataset was technically clean, but structural limitations reduced its usefulness for reliable model deployment.",
    ],
    metricCallouts: [
      { label: "Class balance", value: "96:4", tone: "coral" },
      { label: "Mean LOPO AUC", value: "0.662", tone: "blue" },
      { label: "Prints below 0.60 AUC", value: "43%", tone: "coral" },
    ],
    outcome:
      "The project produced a data-quality assessment showing that process parameters alone were not sufficient for dependable error detection across unseen print geometries.\n\nThe analysis recommended splitting training and testing data by print ID, addressing class imbalance through reweighting or oversampling, using Precision-Recall AUC instead of accuracy, and combining process parameters with image-based or acoustic data to improve generalization.",
    thumbnail: "dataQuality",
  },
  {
    id: "concorde-analysis",
    title: "Concorde Failure Analysis",
    category: "Product Development Management",
    workspaceLabel: "Product Development Management",
    filterId: "program",
    tagVariant: "purple",
    skillTags: [
      "Product Strategy",
      "Risk Management",
      "Stakeholder Analysis",
    ],
    shortDescription:
      "Analyzed how technical trade-offs, stakeholder misalignment, and weak product-development decisions contributed to a landmark product failure.",
    modalSummary:
      "Analyzed how technical trade-offs, stakeholder misalignment, and weak product-development decisions contributed to a landmark product failure.",
    problem:
      "Technical achievement alone could not make the product commercially sustainable without aligned market, cost, and risk decisions.",
    projectStory:
      "The Concorde represented a major breakthrough in aerospace engineering, but technical achievement alone could not make the product commercially sustainable. Its high operating costs, limited capacity, environmental impact, restricted routes, and safety concerns eventually contributed to its failure.\n\nThis project analyzed the Concorde across technical, managerial, financial, operational, and customer perspectives. Rather than treating the crash or commercial decline as isolated events, the analysis examined how product decisions, stakeholder priorities, risk management gaps, market conditions, and limited adaptability interacted across the product lifecycle.",
    approach: [],
    approachParagraph:
      "The analysis used a systems-level product-development framework. It examined the aircraft’s technical architecture, operating model, design trade-offs, market conditions, customer needs, operating costs, route restrictions, environmental concerns, and stakeholder dynamics.\n\nThe project also analyzed managerial deficiencies such as weak financial controls, demand forecasting, and limited market validation. The crash was evaluated as a product-failure case involving technical vulnerability, operational risk, and stakeholder response.\n\nProduct-development concepts including technology-push versus market-pull, stage-gate decision-making, customer needs analysis, flexible architecture, usability, sustainability, and risk management were then applied to develop recommendations for future high-technology products.",
    tools: [
      "Product failure analysis",
      "Root-cause analysis",
      "Fault-tree analysis",
      "Stakeholder analysis",
      "Technology-push versus market-pull analysis",
      "Customer needs analysis",
      "Stage-gate decision framework",
      "Cost and risk analysis",
      "Product architecture assessment",
      "Lifecycle and sustainability analysis",
      "Scenario-based recommendations",
      "Cross-functional product-development evaluation",
    ],
    highlightTerms: [
      "technology-push",
      "market-pull",
      "stage-gate",
      "risk management",
    ],
    keyInsights:
      "Commercial failure emerged from interacting technical, market, cost, and governance constraints rather than a single defect or event.",
    keyInsightBullets: [
      "Technical innovation does not guarantee commercial success without market validation.",
      "The product prioritized speed and prestige over affordability, capacity, sustainability, and broader customer needs.",
      "Cost estimates increased from approximately £70 million to nearly £1.3 billion.",
      "Limited airline participation and weak demand forecasting reduced commercial viability.",
      "High fuel consumption, maintenance costs, noise restrictions, and limited routes created long-term operational constraints.",
      "The crash exposed weaknesses in damage tolerance, preventive risk management, runway monitoring, and safety redundancy.",
      "Corrective actions introduced after the accident could not fully restore customer trust or solve the underlying economic challenges.",
      "A lack of stage-gate decisions allowed the program to continue despite increasing costs and declining commercial feasibility.",
    ],
    outcome:
      "The paper produced a structured failure analysis showing that the Concorde’s decline was not caused by one technical defect or one accident. It resulted from the interaction of ambitious engineering goals, weak market alignment, limited product adaptability, high operating costs, environmental constraints, and insufficient risk governance.",
    proposedRecommendations:
      "The analysis recommended earlier stakeholder involvement, stronger stage-gate reviews, deeper cost and risk analysis, iterative prototyping, modular product architecture, and early integration of sustainability and regulatory requirements.",
    thumbnail: "concorde",
  },
];
