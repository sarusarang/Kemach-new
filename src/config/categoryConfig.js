
export const categoryConfig = {

    skid: {
        title: "Bobcat Skid-Steer Loaders",
        description: "Here at Bobcat®, we make the world's n° 1 skid-steer loader! The Bobcat Company invented the compact skid-steer loader back in 1958. Ever since, Bobcat has celebrated a history of value, performance and reliability. As your versatile partner with more than a dozen models and a range of genuine Bobcat® attachments to suit all your applications, we can help you complete even the toughest jobs.",
        backgroundImage: "https://res.cloudinary.com/doosan-bobcat/image/upload/c_fill,f_auto,g_auto,h_480,q_auto,w_2048/v1671105824/bobcat-assets/alao-approved/in/products/skid-steer-loaders/category-image/20221214-in-ssl-herospot",
        category: "Skid_Steer_Loaders",
        layoutType: "standard",
        showAttachments: true,
        attachmentCategory: "Skid_Steer_Loaders"
    },

    mini: {
        title: "Mini Excavators",
        description: "Our most compact machine are amazingly nimble, versatile and reliable machines that can work just about anywhere while packing a surprising amount of power, rivalling bigger competitors.",
        backgroundImage: "/Strip 1500x350.jpg",
        category: "Mini_Excavators",
        layoutType: "standard",
        showAttachments: true,
        attachmentCategory: "Mini_Excavators"
    },

    backhoe: {
        title: "Backhoe Loaders",
        description: "Bobcat® Backhoe Loaders are versatile machines and can easily be configured for different applications by coupling with Bobcat optional attachments. Whatever your job - digging, trenching, breaking or material handling (to name but a few) - Bobcat Backhoe Loaders have the power to get it done efficiently. Under the hood, they have the best-in-className 75 hp engine to take on tough jobs with powerful performance and high fuel economy.",
        backgroundImage: "/backhostrip.jpg",
        category: "Backhoe_Loaders",
        layoutType: "standard",
        showAttachments: true,
        attachmentCategory: "Backhoe_Loaders"
    },

    asphalt: {
        title: "Asphalt Pavers",
        description: "Gainwells Asphalt and Concrete Batching Plants deliver reliable, high-performance solutions for modern infrastructure projects, ensuring precision mixing, durability, efficiency, and consistent quality for road construction and concrete production worldwide",
        backgroundImage: "/backhostrip.jpg",
        category: "Asphalt",
        layoutType: "standard",
        showAttachments: false,
        attachmentCategory: "Asphalt"
    },

    concrete: {
        title: "Concrete & Accessories ",
        description: "Gainwells Concrete Batching Plants and accessories provide efficient, precise, and durable solutions for high-quality concrete production, supporting infrastructure projects with advanced technology, reliability, and seamless performance across diverse construction requirements.",
        backgroundImage: "/backhostrip.jpg",
        category: "Concrete",
        layoutType: "standard",
        showAttachments: true,
        attachmentCategory: "Concrete"
    },

    compressors: {
        title: "Electric Compressors",
        description: null,
        backgroundImage: null,
        category: "Electric_Compressors",
        layoutType: "simple",
        showAttachments: false
    },

    rock: {
        title: "Rock Breakers",
        description: null,
        backgroundImage: null,
        layoutType: "multi-section",
        showAttachments: false,
        sections: [
            {
                title: "Saga/Beta Series",
                filterKey: "rock_category",
                filterValue: "SAGA"
            },
            {
                title: "MS series",
                filterKey: "rock_category",
                filterValue: "MS"
            },
            {
                title: "RB Series",
                filterKey: "rock_category",
                filterValue: "RB"
            }
        ]
    },

    drills: {
        title: "Hydraulic Attachments & Drill Bits",
        description: null,
        backgroundImage: null,
        layoutType: "multi-section",
        showAttachments: false,
        sections: [
            {
                title: "Hydraulic Attachments",
                filterKey: "sub_category",
                filterValue: "hydraulic_Attachments"
            },
            {
                title: "Drill Bits",
                filterKey: "sub_category",
                filterValue: "drill_Bits"
            }
        ]
    },

    indo_farm_crane: {
        title: "INDO FARM-CRANES",
        description: null,
        backgroundImage: null,
        layoutType: "multi-section",
        showAttachments: false,
        sections: [
            {
                title: "INDO POWER-FN SERIES (4WD)",
                filterKey: "sub_category",
                filterValue: "INDO_POWER_FN_SERIES(4WD)"
            },
            {
                title: "INDO POWER-FNX SERIES (2WD)",
                filterKey: "sub_category",
                filterValue: "INDO_POWER_FNX_SERIES(2WD)"
            },
            {
                title: "INDO POWER CONVENTIONAL PICK ‘N’ CARRY CRANES",
                filterKey: "sub_category",
                filterValue: "INDO_POWER_CONVENTIONAL_PICK_N_CARRY_CRANES"
            }
        ]
    },

};


// Helper function to get category config by key
export const getCategoryConfig = (categoryKey) => {
    return categoryConfig[categoryKey] || null;
};
