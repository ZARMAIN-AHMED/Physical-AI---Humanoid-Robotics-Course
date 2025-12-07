import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import { 
  FaCogs,        // robotics / mechanics
  FaWalking,     // humanoid / locomotion
  FaLaptopCode,  // simulation & development
  FaProjectDiagram, // VLAs / AI workflow
  FaGavel,       // ethics / society
  FaHandsHelping // hands-on learning / practice
} from 'react-icons/fa';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Embodied Intelligence',
    Icon: FaCogs,
    description: (
      <>
        Learn how Physical AI enables robots to perceive, reason, and act in the real world with sensors, actuators, and advanced control systems.
      </>
    ),
  },
  {
    title: 'Humanoid Robotics',
    Icon: FaWalking,
    description: (
      <>
        Explore humanoid robot design, bipedal locomotion, dexterous manipulation, and human-robot interaction principles.
      </>
    ),
  },
  {
    title: 'Simulation & Development',
    Icon: FaLaptopCode,
    description: (
      <>
        Practice simulation of complex robotic environments using ROS 2, Gazebo, Unity, and NVIDIA Isaac Sim for advanced AI-powered robotics.
      </>
    ),
  },
  {
    title: 'Visual Language Models (VLAs)',
    Icon: FaProjectDiagram,
    description: (
      <>
        Integrate language understanding with visual perception to enhance robot intelligence and enable multimodal interactions.
      </>
    ),
  },
  {
    title: 'Ethics & Society',
    Icon: FaGavel,
    description: (
      <>
        Understand ethical considerations, human safety, privacy, and the societal impact of humanoid robotics and Physical AI.
      </>
    ),
  },
  {
    title: 'Hands-on Learning',
    Icon: FaHandsHelping,
    description: (
      <>
        Gain practical skills through projects, programming assignments, and real-world robotics applications.
      </>
    ),
  },
];

function Feature({ title, Icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
