export interface MenuItem {
  slug: string;
  label: string;
}

export interface MenuGroup {
  groupLabel: string;
  items: MenuItem[];
}

export interface TopMenu {
  title: string;
  groups: MenuGroup[];
}

export const topMenus: TopMenu[] = [
  {
    title: "Perception",
    groups: [
      {
        groupLabel: "Visual Perception",
        items: [
          { slug: "Visual_Perception", label: "Visual Perception" },
          { slug: "Color_Perception", label: "Color Perception" },
          { slug: "Depth_Perception", label: "Depth Perception" },
          { slug: "Motion_Perception", label: "Motion Perception" },
          { slug: "Object_Recognition", label: "Object Recognition" },
          { slug: "Face_Perception", label: "Face Perception" },
          { slug: "Visual_Illusions", label: "Visual Illusions" },
        ],
      },
      {
        groupLabel: "Auditory Perception",
        items: [
          { slug: "Auditory_Perception", label: "Auditory Perception" },
          { slug: "Speech_Perception", label: "Speech Perception" },
          { slug: "Music_Cognition", label: "Music Cognition" },
          { slug: "Auditory_Scene_Analysis", label: "Auditory Scene Analysis" },
        ],
      },
      {
        groupLabel: "Other Senses",
        items: [
          { slug: "Somatosensory_Perception", label: "Somatosensory Perception" },
          { slug: "Olfactory_Perception", label: "Olfactory Perception" },
          { slug: "Gustatory_Perception", label: "Gustatory Perception" },
          { slug: "Multisensory_Integration", label: "Multisensory Integration" },
        ],
      },
      {
        groupLabel: "Perceptual Organization",
        items: [
          { slug: "Gestalt_Principles", label: "Gestalt Principles" },
          { slug: "Figure_Ground_Perception", label: "Figure-Ground Perception" },
          { slug: "Perceptual_Constancy", label: "Perceptual Constancy" },
          { slug: "Signal_Detection_Theory", label: "Signal Detection Theory" },
          { slug: "Change_Blindness", label: "Change Blindness" },
        ],
      },
    ],
  },
  {
    title: "Attention",
    groups: [
      {
        groupLabel: "Types of Attention",
        items: [
          { slug: "Selective_Attention", label: "Selective Attention" },
          { slug: "Divided_Attention", label: "Divided Attention" },
          { slug: "Sustained_Attention", label: "Sustained Attention" },
          { slug: "Exogenous_Attention", label: "Exogenous Attention" },
          { slug: "Endogenous_Attention", label: "Endogenous Attention" },
        ],
      },
      {
        groupLabel: "Attentional Phenomena",
        items: [
          { slug: "Inattentional_Blindness", label: "Inattentional Blindness" },
          { slug: "Attentional_Blink", label: "Attentional Blink" },
          { slug: "Stroop_Effect", label: "Stroop Effect" },
          { slug: "Cocktail_Party_Effect", label: "Cocktail Party Effect" },
          { slug: "Inhibition_of_Return", label: "Inhibition of Return" },
        ],
      },
      {
        groupLabel: "Models & Theories",
        items: [
          { slug: "Filter_Theory_of_Attention", label: "Filter Theory of Attention" },
          { slug: "Feature_Integration_Theory", label: "Feature Integration Theory" },
          { slug: "Biased_Competition_Model", label: "Biased Competition Model" },
          { slug: "Attentional_Control_Theory", label: "Attentional Control Theory" },
          { slug: "Multiple_Resource_Theory", label: "Multiple Resource Theory" },
        ],
      },
      {
        groupLabel: "Visual Search",
        items: [
          { slug: "Visual_Search", label: "Visual Search" },
          { slug: "Pop_Out_Effect", label: "Pop-Out Effect" },
          { slug: "Conjunction_Search", label: "Conjunction Search" },
          { slug: "Guided_Search_Model", label: "Guided Search Model" },
        ],
      },
    ],
  },
  {
    title: "Memory",
    groups: [
      {
        groupLabel: "Memory Systems",
        items: [
          { slug: "Sensory_Memory", label: "Sensory Memory" },
          { slug: "Short_Term_Memory", label: "Short-Term Memory" },
          { slug: "Working_Memory", label: "Working Memory" },
          { slug: "Long_Term_Memory", label: "Long-Term Memory" },
          { slug: "Episodic_Memory", label: "Episodic Memory" },
          { slug: "Semantic_Memory", label: "Semantic Memory" },
          { slug: "Procedural_Memory", label: "Procedural Memory" },
        ],
      },
      {
        groupLabel: "Encoding & Storage",
        items: [
          { slug: "Levels_of_Processing", label: "Levels of Processing" },
          { slug: "Elaborative_Rehearsal", label: "Elaborative Rehearsal" },
          { slug: "Schema_Theory", label: "Schema Theory" },
          { slug: "Dual_Coding_Theory", label: "Dual Coding Theory" },
          { slug: "Memory_Consolidation", label: "Memory Consolidation" },
        ],
      },
      {
        groupLabel: "Retrieval & Forgetting",
        items: [
          { slug: "Recall_vs_Recognition", label: "Recall vs. Recognition" },
          { slug: "Encoding_Specificity", label: "Encoding Specificity" },
          { slug: "Forgetting_Curve", label: "Forgetting Curve" },
          { slug: "Interference_Theory", label: "Interference Theory" },
          { slug: "Retrieval_Induced_Forgetting", label: "Retrieval-Induced Forgetting" },
          { slug: "Tip_of_the_Tongue", label: "Tip-of-the-Tongue Phenomenon" },
        ],
      },
      {
        groupLabel: "Special Topics",
        items: [
          { slug: "False_Memories", label: "False Memories" },
          { slug: "Flashbulb_Memory", label: "Flashbulb Memory" },
          { slug: "Prospective_Memory", label: "Prospective Memory" },
          { slug: "Autobiographical_Memory", label: "Autobiographical Memory" },
          { slug: "Eyewitness_Memory", label: "Eyewitness Memory" },
          { slug: "Memory_and_Emotion", label: "Memory and Emotion" },
        ],
      },
    ],
  },
  {
    title: "Learning",
    groups: [
      {
        groupLabel: "Associative Learning",
        items: [
          { slug: "Classical_Conditioning", label: "Classical Conditioning" },
          { slug: "Operant_Conditioning", label: "Operant Conditioning" },
          { slug: "Reinforcement_Schedules", label: "Reinforcement Schedules" },
          { slug: "Extinction_Learning", label: "Extinction (Learning)" },
          { slug: "Stimulus_Generalization", label: "Stimulus Generalization" },
        ],
      },
      {
        groupLabel: "Cognitive Learning",
        items: [
          { slug: "Observational_Learning", label: "Observational Learning" },
          { slug: "Latent_Learning", label: "Latent Learning" },
          { slug: "Insight_Learning", label: "Insight Learning" },
          { slug: "Concept_Learning", label: "Concept Learning" },
          { slug: "Rule_Learning", label: "Rule Learning" },
        ],
      },
      {
        groupLabel: "Skill Acquisition",
        items: [
          { slug: "Motor_Learning", label: "Motor Learning" },
          { slug: "Implicit_Learning", label: "Implicit Learning" },
          { slug: "Expertise_and_Deliberate_Practice", label: "Expertise & Deliberate Practice" },
          { slug: "Transfer_of_Learning", label: "Transfer of Learning" },
          { slug: "Spacing_Effect", label: "Spacing Effect" },
        ],
      },
      {
        groupLabel: "Learning Theories",
        items: [
          { slug: "Rescorla_Wagner_Model", label: "Rescorla-Wagner Model" },
          { slug: "Computational_Models_of_Learning", label: "Computational Models of Learning" },
          { slug: "Error_Driven_Learning", label: "Error-Driven Learning" },
          { slug: "Statistical_Learning", label: "Statistical Learning" },
        ],
      },
    ],
  },
  {
    title: "Language",
    groups: [
      {
        groupLabel: "Language Structure",
        items: [
          { slug: "Phonology", label: "Phonology" },
          { slug: "Morphology_Language", label: "Morphology (Language)" },
          { slug: "Syntax", label: "Syntax" },
          { slug: "Semantics", label: "Semantics" },
          { slug: "Pragmatics", label: "Pragmatics" },
        ],
      },
      {
        groupLabel: "Language Processing",
        items: [
          { slug: "Language_Comprehension", label: "Language Comprehension" },
          { slug: "Language_Production", label: "Language Production" },
          { slug: "Word_Recognition", label: "Word Recognition" },
          { slug: "Sentence_Processing", label: "Sentence Processing" },
          { slug: "Discourse_Processing", label: "Discourse Processing" },
        ],
      },
      {
        groupLabel: "Language Acquisition",
        items: [
          { slug: "Language_Acquisition", label: "Language Acquisition" },
          { slug: "Bilingualism", label: "Bilingualism" },
          { slug: "Critical_Period_Hypothesis", label: "Critical Period Hypothesis" },
          { slug: "Universal_Grammar", label: "Universal Grammar" },
        ],
      },
      {
        groupLabel: "Language & Thought",
        items: [
          { slug: "Linguistic_Relativity", label: "Linguistic Relativity" },
          { slug: "Language_and_Cognition", label: "Language and Cognition" },
          { slug: "Reading_and_Dyslexia", label: "Reading and Dyslexia" },
          { slug: "Aphasia", label: "Aphasia" },
        ],
      },
    ],
  },
  {
    title: "Thinking",
    groups: [
      {
        groupLabel: "Reasoning",
        items: [
          { slug: "Deductive_Reasoning", label: "Deductive Reasoning" },
          { slug: "Inductive_Reasoning", label: "Inductive Reasoning" },
          { slug: "Analogical_Reasoning", label: "Analogical Reasoning" },
          { slug: "Causal_Reasoning", label: "Causal Reasoning" },
          { slug: "Conditional_Reasoning", label: "Conditional Reasoning" },
        ],
      },
      {
        groupLabel: "Problem Solving",
        items: [
          { slug: "Problem_Solving", label: "Problem Solving" },
          { slug: "Means_End_Analysis", label: "Means-End Analysis" },
          { slug: "Mental_Set", label: "Mental Set" },
          { slug: "Functional_Fixedness", label: "Functional Fixedness" },
          { slug: "Incubation_Effect", label: "Incubation Effect" },
        ],
      },
      {
        groupLabel: "Decision Making",
        items: [
          { slug: "Decision_Making", label: "Decision Making" },
          { slug: "Prospect_Theory", label: "Prospect Theory" },
          { slug: "Bounded_Rationality", label: "Bounded Rationality" },
          { slug: "Expected_Utility_Theory", label: "Expected Utility Theory" },
          { slug: "Framing_Effects", label: "Framing Effects" },
        ],
      },
      {
        groupLabel: "Heuristics & Biases",
        items: [
          { slug: "Availability_Heuristic", label: "Availability Heuristic" },
          { slug: "Representativeness_Heuristic", label: "Representativeness Heuristic" },
          { slug: "Anchoring_Bias", label: "Anchoring Bias" },
          { slug: "Confirmation_Bias", label: "Confirmation Bias" },
          { slug: "Overconfidence_Effect", label: "Overconfidence Effect" },
          { slug: "Dunning_Kruger_Effect", label: "Dunning-Kruger Effect" },
        ],
      },
      {
        groupLabel: "Creativity & Mental Models",
        items: [
          { slug: "Creativity", label: "Creativity" },
          { slug: "Divergent_Thinking", label: "Divergent Thinking" },
          { slug: "Mental_Models", label: "Mental Models" },
          { slug: "Dual_Process_Theory", label: "Dual-Process Theory" },
          { slug: "Metacognition", label: "Metacognition" },
        ],
      },
    ],
  },
  {
    title: "Development",
    groups: [
      {
        groupLabel: "Cognitive Development",
        items: [
          { slug: "Piagets_Theory", label: "Piaget's Theory" },
          { slug: "Vygotskys_Theory", label: "Vygotsky's Theory" },
          { slug: "Information_Processing_Development", label: "Information Processing Development" },
          { slug: "Theory_of_Mind", label: "Theory of Mind" },
          { slug: "Core_Knowledge_Theory", label: "Core Knowledge Theory" },
        ],
      },
      {
        groupLabel: "Infant Cognition",
        items: [
          { slug: "Object_Permanence", label: "Object Permanence" },
          { slug: "Infant_Perception", label: "Infant Perception" },
          { slug: "Joint_Attention", label: "Joint Attention" },
          { slug: "Preferential_Looking", label: "Preferential Looking" },
        ],
      },
      {
        groupLabel: "Lifespan Development",
        items: [
          { slug: "Executive_Function_Development", label: "Executive Function Development" },
          { slug: "Adolescent_Brain_Development", label: "Adolescent Brain Development" },
          { slug: "Cognitive_Aging", label: "Cognitive Aging" },
          { slug: "Cognitive_Reserve", label: "Cognitive Reserve" },
          { slug: "Wisdom_and_Cognition", label: "Wisdom and Cognition" },
        ],
      },
      {
        groupLabel: "Neurodevelopmental",
        items: [
          { slug: "Autism_Spectrum_Disorder", label: "Autism Spectrum Disorder" },
          { slug: "ADHD", label: "ADHD" },
          { slug: "Intellectual_Disability", label: "Intellectual Disability" },
          { slug: "Developmental_Dyslexia", label: "Developmental Dyslexia" },
        ],
      },
    ],
  },
  {
    title: "Neuroscience",
    groups: [
      {
        groupLabel: "Brain Structure & Function",
        items: [
          { slug: "Cerebral_Cortex", label: "Cerebral Cortex" },
          { slug: "Prefrontal_Cortex", label: "Prefrontal Cortex" },
          { slug: "Hippocampus", label: "Hippocampus" },
          { slug: "Amygdala", label: "Amygdala" },
          { slug: "Basal_Ganglia", label: "Basal Ganglia" },
          { slug: "Cerebellum", label: "Cerebellum" },
        ],
      },
      {
        groupLabel: "Neuroimaging",
        items: [
          { slug: "Functional_MRI", label: "Functional MRI (fMRI)" },
          { slug: "Electroencephalography", label: "Electroencephalography (EEG)" },
          { slug: "Event_Related_Potentials", label: "Event-Related Potentials (ERPs)" },
          { slug: "Transcranial_Magnetic_Stimulation", label: "Transcranial Magnetic Stimulation (TMS)" },
          { slug: "PET_Scanning", label: "PET Scanning" },
        ],
      },
      {
        groupLabel: "Neural Processes",
        items: [
          { slug: "Neural_Plasticity", label: "Neural Plasticity" },
          { slug: "Lateralization", label: "Lateralization" },
          { slug: "Mirror_Neurons", label: "Mirror Neurons" },
          { slug: "Long_Term_Potentiation", label: "Long-Term Potentiation" },
          { slug: "Neurotransmitters_and_Cognition", label: "Neurotransmitters and Cognition" },
        ],
      },
      {
        groupLabel: "Cognitive Neuroscience",
        items: [
          { slug: "Neural_Correlates_of_Consciousness", label: "Neural Correlates of Consciousness" },
          { slug: "Default_Mode_Network", label: "Default Mode Network" },
          { slug: "Connectomics", label: "Connectomics" },
          { slug: "Brain_Computer_Interfaces", label: "Brain-Computer Interfaces" },
        ],
      },
    ],
  },
  {
    title: "Applications",
    groups: [
      {
        groupLabel: "Education",
        items: [
          { slug: "Cognitive_Load_Theory", label: "Cognitive Load Theory" },
          { slug: "Testing_Effect", label: "Testing Effect" },
          { slug: "Multimedia_Learning", label: "Multimedia Learning" },
          { slug: "Self_Regulated_Learning", label: "Self-Regulated Learning" },
          { slug: "Growth_Mindset", label: "Growth Mindset" },
        ],
      },
      {
        groupLabel: "Clinical Psychology",
        items: [
          { slug: "Cognitive_Behavioral_Therapy", label: "Cognitive Behavioral Therapy" },
          { slug: "Cognitive_Distortions", label: "Cognitive Distortions" },
          { slug: "Alzheimers_Disease", label: "Alzheimer's Disease" },
          { slug: "Traumatic_Brain_Injury", label: "Traumatic Brain Injury" },
          { slug: "PTSD_and_Memory", label: "PTSD and Memory" },
        ],
      },
      {
        groupLabel: "Human Factors",
        items: [
          { slug: "Human_Computer_Interaction", label: "Human-Computer Interaction" },
          { slug: "Usability_and_UX", label: "Usability and UX" },
          { slug: "Driving_and_Distraction", label: "Driving and Distraction" },
          { slug: "Aviation_Psychology", label: "Aviation Psychology" },
          { slug: "Ergonomics", label: "Ergonomics" },
        ],
      },
      {
        groupLabel: "AI & Cognition",
        items: [
          { slug: "Artificial_Intelligence_and_Cognition", label: "Artificial Intelligence & Cognition" },
          { slug: "Computational_Cognitive_Modeling", label: "Computational Cognitive Modeling" },
          { slug: "Embodied_Cognition", label: "Embodied Cognition" },
          { slug: "Cognitive_Architecture", label: "Cognitive Architecture" },
        ],
      },
      {
        groupLabel: "Forensic & Legal",
        items: [
          { slug: "Forensic_Psychology", label: "Forensic Psychology" },
          { slug: "Eyewitness_Testimony", label: "Eyewitness Testimony" },
          { slug: "Lie_Detection", label: "Lie Detection" },
        ],
      },
    ],
  },
  {
    title: "Key Figures",
    groups: [
      {
        groupLabel: "Founding Figures",
        items: [
          { slug: "Wilhelm_Wundt", label: "Wilhelm Wundt" },
          { slug: "William_James", label: "William James" },
          { slug: "Hermann_Ebbinghaus", label: "Hermann Ebbinghaus" },
          { slug: "Edward_Thorndike", label: "Edward Thorndike" },
        ],
      },
      {
        groupLabel: "Gestalt & Behaviorist Era",
        items: [
          { slug: "Max_Wertheimer", label: "Max Wertheimer" },
          { slug: "Wolfgang_Kohler", label: "Wolfgang Köhler" },
          { slug: "Ivan_Pavlov", label: "Ivan Pavlov" },
          { slug: "B_F_Skinner", label: "B. F. Skinner" },
        ],
      },
      {
        groupLabel: "Cognitive Revolution",
        items: [
          { slug: "Ulric_Neisser", label: "Ulric Neisser" },
          { slug: "George_Miller", label: "George Miller" },
          { slug: "Noam_Chomsky", label: "Noam Chomsky" },
          { slug: "Herbert_Simon", label: "Herbert Simon" },
          { slug: "Allen_Newell", label: "Allen Newell" },
        ],
      },
      {
        groupLabel: "Memory & Learning Researchers",
        items: [
          { slug: "Endel_Tulving", label: "Endel Tulving" },
          { slug: "Alan_Baddeley", label: "Alan Baddeley" },
          { slug: "Elizabeth_Loftus", label: "Elizabeth Loftus" },
          { slug: "Fergus_Craik", label: "Fergus Craik" },
          { slug: "Henry_Roediger", label: "Henry Roediger" },
        ],
      },
      {
        groupLabel: "Developmental Psychologists",
        items: [
          { slug: "Jean_Piaget", label: "Jean Piaget" },
          { slug: "Lev_Vygotsky", label: "Lev Vygotsky" },
          { slug: "Jerome_Bruner", label: "Jerome Bruner" },
        ],
      },
      {
        groupLabel: "Judgment & Decision Making",
        items: [
          { slug: "Daniel_Kahneman_Cog", label: "Daniel Kahneman" },
          { slug: "Amos_Tversky_Cog", label: "Amos Tversky" },
          { slug: "Gerd_Gigerenzer", label: "Gerd Gigerenzer" },
        ],
      },
      {
        groupLabel: "Attention & Perception Researchers",
        items: [
          { slug: "Anne_Treisman", label: "Anne Treisman" },
          { slug: "Donald_Broadbent", label: "Donald Broadbent" },
          { slug: "Michael_Posner", label: "Michael Posner" },
          { slug: "Roger_Shepard", label: "Roger Shepard" },
        ],
      },
      {
        groupLabel: "Modern Cognitive Scientists",
        items: [
          { slug: "Steven_Pinker", label: "Steven Pinker" },
          { slug: "Michael_Gazzaniga", label: "Michael Gazzaniga" },
          { slug: "Stanislas_Dehaene", label: "Stanislas Dehaene" },
          { slug: "Eleanor_Rosch", label: "Eleanor Rosch" },
        ],
      },
    ],
  },
];
