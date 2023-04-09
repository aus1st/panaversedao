import QuarterBox from "../components/widgets/QuarterBox"

import ai from '../assets/images/ai.png'
import ambient from '../assets/images/ambient.png'
import cloudnative from '../assets/images/cloudnative.png'
import genomics from '../assets/images/genomics.png'
import networkprog from '../assets/images/networkprog.png'
import web3 from '../assets/images/web3.png'

export interface QtrBox {
title: string,
desc: string,
qtrNum: number,
haveBorder?: boolean
}

export const programsData = [
    {
        slug:"wmd",
        title:'Web 3.0 (Blockchain) and Metaverse Specialization',
        desc:'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.',
        image:web3,
        qtrs:[
                {
                    title:'Quarter IV',
                    desc:'W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps',
                    number:4    
                },
                {
                    title:'Quarter V',
                    desc:'MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences',
                    number:5    
                }
            ]    
    },
    {
        slug:"ai",
        title:'Artificial Intelligence (AI) and Deep Learning Specialization',
        desc:'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.',
        image:ai,
        qtrs:[
                {
                    title:'Quarter IV',
                    desc:'AI-351: Developing Planet-Scale Intelligent APIs and Python Programming',
                    number:4
                },
                {
                    title:'Quarter V',
                    desc:' AI-361: Deep Learning and MLOps',
                    number:5    
                }
            ]    
    },
    {
        slug:"cnc",
        title:'Cloud-Native Computing Specialization',
        desc:'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.',
        image:cloudnative,
        qtrs:[
                {
                    title:'Quarter IV',
                    desc:'CN-351: Certified Kubernetes Application Developer (CKAD)',
                    number:4
                },
                {
                    title:'Quarter V',
                    desc:'CN-361: Developing Multi-Cloud Apps using CDK for Terraform',
                    number:5    
                }
            ]    
    },
    {
        slug:"iot",
        title:'Ambient Computing and IoT Specialization',
        desc:'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.',
        image:ambient,
        qtrs:[
                {
                    title:'Quarter IV',
                    desc:'AC-351: Ambient Computing with Voice Assistants and Matter Devices',
                    number:4
                },
                {
                    title:'Quarter V',
                    desc:'AC-361: Embedded Programming using C and Rust',
                    number:5    
                }
            ]    
    },
    {
        slug:"gbs",
        title:'Genomics and Bioinformatics Specializatio',
        desc:'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.',
        image:genomics,
        qtrs:[
                {
                    title:'Quarter IV',
                    desc:'Bio-351: Python for Biologists',
                    number:4
                },
                {
                    title:'Quarter V',
                    desc:'Bio-361: Bioinformatics with Python',
                    number:5    
                }
            ]    
    },
    {
        slug:"npa",
        title:'Network Programmability and Automation Specialization',
        desc:'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.',
        image:networkprog,
        qtrs:[
                {
                    title:'Quarter IV',
                    desc:'NPA-351: CCNA 200-301 Certification',
                    number:4
                },
                {
                    title:'Quarter V',
                    desc:'NPA-361: Network Programmability and Automation',
                    number:5    
                }
            ]    
    },
]