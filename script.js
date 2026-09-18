const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
        const open = mainNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
        document.body.classList.toggle('menu-open', open);
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        });
    });
}

/* =========================================================
   PROJECT DATA
   ========================================================= */

const projectData = {

    /* =====================================================
       CUSTOMER CHURN, RETENTION & MARKETING ANALYTICS
       ===================================================== */

    churn: {
        category: 'Customer Analytics',

        title: 'Customer Churn, Retention & Marketing Analytics',

        tools: ['Python', 'Power BI', 'Power Query', 'DAX'],

        image: 'https://raw.githubusercontent.com/AndrewPamela/customer-churn-retention-marketing-analytics/main/Screenshots/03-churn-retention-1.png.png',

        overview:
            'Analysed customer behaviour, churn risk, retention patterns, customer lifetime value and marketing performance across 3,500 customers generating $171M in revenue.',

        problem:
            'The analysis focused on understanding customer churn risk, identifying high-risk customer segments and examining customer behaviour and value to support more targeted retention decisions.',

        objectives:
            'Analyse customer churn and retention patterns, identify high-risk customers, evaluate customer lifetime value, examine demographic and engagement patterns, and identify customer segments requiring retention attention.',

        dataset:
            'Customer profiles, transactions, customer behaviour, marketing interactions, churn indicators and customer lifetime value data.',

        cleaning:
            'Customer data was cleaned and prepared using Python and Power Query before being analysed and visualised in Power BI.',

        analysis:
            'Python was used for data preparation and analysis, while Power BI, Power Query and DAX were used to develop the customer analytics dashboard and evaluate churn risk, customer value, demographics and engagement patterns.',

        insights:
            'The analysis covered 3,500 customers generating $171M in revenue and identified a 26% churn rate. A total of 1,024 customers were identified as high-risk, with most falling within the 41–60% churn probability range. Customers aged 41–60 represented the largest demographic segment at approximately 1.3K customers, while the 26–40 age group emerged as a key churn-risk segment. Customer engagement showed a positive relationship with Customer Lifetime Value (CLV), while High Value–Low Risk customers represented an important segment for revenue protection.',

        recommendations:
            'Prioritise personalised retention campaigns for high-risk customers. Trigger re-engagement earlier for customers approaching inactivity. Focus customer experience and engagement initiatives on the 26–40 age group. Protect high-value customers through targeted loyalty and retention strategies. Use churn indicators and customer behaviour to support proactive retention decisions.',

        visualisations:
            'Power BI dashboard covering churn risk, customer demographics, customer engagement, customer lifetime value and retention segments.',

        outcome:
            'The analysis provided a clearer view of customer risk and value, helping identify where retention efforts could be prioritised based on customer behaviour and value.',

        kpi: '26%',

        insightCount: '1,024',

        datasetType: 'Customer Data',

        github: 'https://github.com/AndrewPamela/customer-churn-retention-marketing-analytics',

        dashboard: '#projects'
    },


    /* =====================================================
       NORTHWIND SALES & CUSTOMER ANALYTICS
       ===================================================== */

    northwind: {
        category: 'Sales Analytics',

        title: 'Northwind Sales & Customer Analytics',

        tools: ['MySQL', 'SQL'],

        image: 'https://raw.githubusercontent.com/AndrewPamela/SQL-Projects/main/Northwind-Sales-Customer-Analytics/images/05-shipping-performance.png.png',

        overview:
            'Analysed the Northwind database using SQL to explore order and freight performance, employee activity, customer ordering patterns, order trends and shipping status.',

        problem:
            'The analysis focused on understanding order volumes, customer purchasing activity, employee workload, freight performance and shipping activity.',

        objectives:
            'Analyse order volumes, identify the customers and employees contributing most to order activity, examine monthly order trends, evaluate freight performance and review shipping status.',

        dataset:
            'Northwind relational database containing customers, orders, order details, employees, products, categories and shipping information.',

        cleaning:
            'The relational tables were joined using SQL to connect customers, orders, employees, products and order details before performing the analysis.',

        analysis:
            'SQL queries were used to analyse order activity, freight performance, employee workload, customer ordering patterns, monthly order trends and shipping-date coverage.',

        insights:
            '830 orders were analysed, with total freight costs of 64,942.69. Peacock handled the highest number of orders, with 156 orders. QUICK-Stop placed the highest number of orders, with 31 orders. Monthly order activity peaked at 74 orders in April 2018. All 830 orders had a recorded shipping date, indicating complete shipping-date coverage across the analysed orders.',

        recommendations:
            'Use order and customer activity to support sales planning, monitor employee workload, review high-activity customer accounts and continue tracking freight and shipping performance for operational visibility.',

        visualisations:
            'SQL query outputs and analytical tables covering order volume, customer activity, employee performance, monthly trends, freight and shipping status.',

        outcome:
            'The analysis provided visibility into order volumes, customer purchasing activity, employee workload and freight performance, while identifying the periods, customers and employees contributing most to order activity.',

        kpi: '830',

        insightCount: '5',

        datasetType: 'Northwind Relational Database',

        github: 'https://github.com/AndrewPamela/SQL-Projects/tree/main/Northwind-Sales-Customer-Analytics',

        dashboard: '#projects'
    },


    /* =====================================================
       FINANCIAL ANALYTICS & FORECASTING DASHBOARD
       ===================================================== */

    finance: {
        category: 'Financial Analytics',

        title: 'Financial Analytics & Forecasting Dashboard',

        tools: ['Python', 'Power BI', 'Power Query', 'DAX'],

        image: 'https://raw.githubusercontent.com/AndrewPamela/Python-Projects/main/Financial-Data-Automation-Analysis/02_Monthly_Financial_Analysis.png.png',

        overview:
            'Analysed over ₦1B in financial transactions to evaluate income, expenses, net cash flow, departmental performance, regional performance, payment methods and forecast trends.',

        problem:
            'The analysis focused on understanding overall financial performance, changes in income and expenses, operational spending patterns and the future direction of income and cash flow.',

        objectives:
            'Analyse income and expenses, evaluate net cash flow, identify high-performing departments and regions, compare payment methods and use forecasting to examine future financial trends.',

        dataset:
            'Financial transaction records containing income, expenses, departments, regions, payment methods, transaction values and dates.',

        cleaning:
            'Financial transaction data was cleaned and prepared using Python and Power Query before being analysed and visualised in Power BI.',

        analysis:
            'Python was used for data exploration and preparation, while Power BI, Power Query and DAX were used to analyse financial performance, departmental and regional activity, payment methods and forecast trends.',

        insights:
            'The analysis recorded ₦851M in income and ₦299M in expenses, resulting in ₦553M net cash flow. The income-to-expense ratio was 2.85, while March generated the highest monthly income at ₦97M. Income growth declined by 4.62% as expenses increased by 22.33%, highlighting emerging cost pressures. Marketing and Operations generated the highest departmental transaction values, while Lagos recorded the strongest regional performance. Direct Debit generated the highest transaction value at ₦244.12M, while Mobile Money recorded the highest transaction volume with 401 transactions. The three-month forecast projected ₦185.13M in income and ₦113.31M in net cash flow, while indicating a gradual decline in projected income.',

        recommendations:
            'Strengthen revenue-generation strategies to address declining income growth. Monitor rising expenses and optimise major cost drivers. Invest strategically in high-performing departments and regions. Use forecasting insights to plan for potential revenue declines. Investigate transactions classified under the Unknown region to improve data quality.',

        visualisations:
            'Power BI financial dashboard covering income, expenses, net cash flow, departmental performance, regional performance, payment methods and forecast trends.',

        outcome:
            'The analysis provided a clear view of financial performance while highlighting emerging cost pressures and projected income trends that can support revenue planning and cost control.',

        kpi: '₦553M',

        insightCount: '9',

        datasetType: 'Financial Transactions',

        github: 'https://github.com/AndrewPamela/Python-Projects/tree/main/Financial-Data-Automation-Analysis',

        dashboard: '#projects'
    },


    /* =====================================================
       NHS HEALTHCARE TRUST ANALYTICS DASHBOARD
       ===================================================== */

    healthcare: {
        category: 'Healthcare Analytics',

        title: 'NHS Healthcare Trust Analytics Dashboard',

        tools: ['MySQL', 'Power Query', 'Power BI', 'DAX'],

        image: 'https://raw.githubusercontent.com/AndrewPamela/Power-bi-projects/main/images/01_Executive_Healthcare_Dashboard.jpg.png',

        overview:
            'Analysed healthcare operations across 50 hospitals, 225 doctors and 100,000 appointments, covering patient activity, hospital utilisation, clinical performance and financial performance.',

        problem:
            'The analysis focused on understanding appointment activity, hospital utilisation, patient demand, clinical workload and healthcare financial performance.',

        objectives:
            'Analyse appointment activity, evaluate hospital and departmental performance, review physician workloads, examine patient and diagnosis patterns, and assess healthcare revenue and outstanding payments.',

        dataset:
            'A relational healthcare database containing hospitals, doctors, patients, appointments, diagnoses, treatments, prescriptions, laboratory results, referrals and payment records.',

        cleaning:
            'The healthcare tables were joined through SQL relationships and prepared using Power Query for analysis and reporting in Power BI.',

        analysis:
            'The analysis combined operational, clinical and financial data to evaluate appointment activity, hospital performance, patient demographics, diagnosis trends, physician workloads, departmental demand and payment performance.',

        insights:
            'The analysis covered 100,000 appointments across 50 hospitals and 225 doctors, with £125.3M in healthcare revenue. More than £20M was identified in pending and partially paid transactions. Appointment no-shows were 16.8% and cancellations were also 16.8%, highlighting significant appointment losses. Northgate Healthcare Hospital recorded the highest appointment volume, while Plastic Surgery was the busiest clinical department.',

        recommendations:
            'Improve appointment scheduling and attendance management. Strengthen follow-up on outstanding payments to improve revenue collection. Use physician workload data to support workforce planning. Monitor high-demand clinical departments and hospital activity to improve resource allocation and patient access.',

        visualisations:
            'Executive Power BI dashboard covering appointments, patient activity, hospital performance, clinical departments, physician workload and financial performance.',

        outcome:
            'The analysis provided an executive view of healthcare operations, helping highlight opportunities around appointment management, revenue collection, workforce planning and resource utilisation.',

        kpi: '100K',

        insightCount: '6',

        datasetType: 'Healthcare Database',

        github: 'https://github.com/AndrewPamela/SQL-Projects/tree/main/NHS-Healthcare-Management-Database',

        dashboard: '#projects'
    },


    /* =====================================================
       COMMERCIAL INTELLIGENCE DASHBOARD
       ===================================================== */

    commercial: {
        category: 'Business Intelligence',

        title: 'Commercial Intelligence Dashboard',

        tools: ['Power BI', 'Power Query', 'DAX'],

        image: 'https://raw.githubusercontent.com/AndrewPamela/Power-bi-projects/main/images/Commercial_%20intelliegnce_Dashbaord.png',

        overview:
            'Analysed commercial performance between 2020 and 2025, covering $7.95B in sales, $2.49B in profit and approximately 14K orders.',

        problem:
            'The analysis focused on understanding sales growth, profitability, product contribution, regional performance, payment methods and order fulfilment.',

        objectives:
            'Evaluate sales and profit trends, identify high-performing products, compare regional performance, analyse payment methods and examine completed, pending and cancelled orders.',

        dataset:
            'Commercial transaction data containing sales, profit, orders, products, categories, regions, payment methods and order status across 2020–2025.',

        cleaning:
            'The commercial data was prepared using Power Query, with transaction fields, product categories, regions, payment methods and order statuses structured for analysis in Power BI.',

        analysis:
            'The dashboard evaluated sales and profit trends, product contribution, regional performance, payment methods and order status. Pareto analysis was also used to identify the products contributing the largest share of revenue.',

        insights:
            'The business generated $7.95B in total sales and $2.49B in total profit from approximately 14K orders, resulting in a 31.36% profit margin. Average order value was approximately $588.88K. Annual sales remained above $1.2B, with sales peaking at approximately $1.35B in 2022 before a slight decline in 2024–2025. Smartphones generated the highest sales, while Air Conditioners were the most profitable product. Printers generated approximately $382.87M in revenue. South recorded the strongest sales and profit performance, while East recorded the lowest. Card payments accounted for approximately $2.03B and Bank Transfer approximately $2.01B. Order status showed 60.3% completed, 20.1% cancelled and 19.5% pending.',

        recommendations:
            'Prioritise high-margin products alongside high-volume products. Investigate the causes of the 20.2% cancellation rate. Improve conversion of pending orders through faster fulfilment and customer follow-up. Protect inventory for major revenue contributors. Review strategies in lower-performing regions. Evaluate lower-contributing products based on both revenue and profitability.',

        visualisations:
            'Executive Power BI dashboard covering sales, profit, product performance, Pareto analysis, regional performance, payment methods and order status.',

        outcome:
            'The analysis provided an executive view of commercial performance and highlighted opportunities around profitability, product portfolio decisions, regional performance and order fulfilment.',

        kpi: '$7.95B',

        insightCount: '9',

        datasetType: 'Commercial Transaction Data',

        github: 'https://github.com/AndrewPamela/Power-bi-projects/blob/main/COMMERCIAL%20INTELLIGENCE%20DASHBOARD.pbix',

        dashboard: '#projects'
    }

};


/* =========================================================
   PROJECT MODAL
   ========================================================= */

const mainModal = document.getElementById('projectModal');

const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalTools = document.getElementById('modalTools');

const modalOverview = document.getElementById('modalOverview');
const modalProblem = document.getElementById('modalProblem');
const modalObjectives = document.getElementById('modalObjectives');
const modalDataset = document.getElementById('modalDataset');
const modalCleaning = document.getElementById('modalCleaning');
const modalAnalysis = document.getElementById('modalAnalysis');
const modalInsights = document.getElementById('modalInsights');
const modalRecommendations = document.getElementById('modalRecommendations');
const modalVisualisations = document.getElementById('modalVisualisations');
const modalOutcome = document.getElementById('modalOutcome');

const modalKpi = document.getElementById('modalKpi');
const modalInsightCount = document.getElementById('modalInsightCount');
const modalDatasetType = document.getElementById('modalDatasetType');

const modalGithub = document.getElementById('modalGithub');
const modalDashboard = document.getElementById('modalDashboard');

const modalProjectImage = document.getElementById('modalProjectImage');

const modalClose = document.getElementById('modalClose');


function openProject(projectId) {

    if (!projectData[projectId]) return;

    const project = projectData[projectId];

    modalCategory.textContent = project.category;

    modalTitle.textContent = project.title;

    modalTools.innerHTML = '';

    project.tools.forEach(tool => {

        const span = document.createElement('span');

        span.textContent = tool;

        modalTools.appendChild(span);

    });

    modalOverview.textContent = project.overview;

    modalProblem.textContent = project.problem;

    modalObjectives.textContent = project.objectives;

    modalDataset.textContent = project.dataset;

    modalCleaning.textContent = project.cleaning;

    modalAnalysis.textContent = project.analysis;

    modalInsights.textContent = project.insights;

    modalRecommendations.textContent = project.recommendations;

    modalVisualisations.textContent = project.visualisations;

    modalOutcome.textContent = project.outcome;

    modalKpi.textContent = project.kpi;

    modalInsightCount.textContent = project.insightCount;

    modalDatasetType.textContent = project.datasetType;

    modalGithub.href = project.github;

    modalDashboard.href = project.dashboard;

    /* LOAD ACTUAL PROJECT DASHBOARD IMAGE */

    if (modalProjectImage && project.image) {

        modalProjectImage.src = project.image;

        modalProjectImage.alt = project.title + ' dashboard';

    }

    if (mainModal) {

        mainModal.classList.add('open');

        mainModal.setAttribute('aria-hidden', 'false');

    }
}


/* =========================================================
   CLOSE PROJECT MODAL
   ========================================================= */

function closeProject() {

    if (mainModal) {

        mainModal.classList.remove('open');

        mainModal.setAttribute('aria-hidden', 'true');

    }
}


/* =========================================================
   PROJECT BUTTONS
   ========================================================= */

document.querySelectorAll('[data-project-id]').forEach(button => {

    button.addEventListener('click', event => {

        event.preventDefault();

        const projectId =
            event.currentTarget.getAttribute('data-project-id');

        openProject(projectId);

    });

});


/* =========================================================
   MODAL CLOSE BUTTON
   ========================================================= */

if (modalClose) {

    modalClose.addEventListener('click', closeProject);

}


if (mainModal) {

    mainModal.querySelectorAll('[data-close-modal]').forEach(el => {

        el.addEventListener('click', closeProject);

    });

    document.addEventListener('keydown', event => {

        if (
            event.key === 'Escape' &&
            mainModal.classList.contains('open')
        ) {

            closeProject();

        }

    });

}


/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm = document.querySelector('.contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', event => {

        event.preventDefault();

        const button =
            contactForm.querySelector('button[type="submit"]');

        if (!button) return;

        button.textContent = 'Message Sent';

        button.disabled = true;

        setTimeout(() => {

            button.textContent = 'Send Message';

            button.disabled = false;

            contactForm.reset();

        }, 1500);

    });

}