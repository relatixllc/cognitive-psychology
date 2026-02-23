export interface Concept {
  name: string;
  symbol: string;
  description: string;
  formula?: string;
  references?: string[];
  example?: string;
}

export interface TheoryModel {
  name: string;
  category: string;
  description: string;
  formula?: string;
  useCase: string;
  color: string;
}

export interface Method {
  name: string;
  type: "behavioral" | "neuroimaging";
  parameters: string;
  support: string;
  description: string;
  cognitiveUse: string;
}

export const concepts: Concept[] = [
  {
    name: "Attention",
    symbol: "ATT",
    description:
      "The cognitive process of selectively concentrating on relevant information while ignoring distractions. A fundamental bottleneck in information processing.",
    formula: "Capacity = f(arousal, task demands)",
    references: [
      "Broadbent, D. E. (1958). Perception and communication. Pergamon Press. https://doi.org/10.1037/10037-000",
      "Posner, M. I. (1980). Orienting of attention. Quarterly Journal of Experimental Psychology, 32(1), 3–25. https://doi.org/10.1080/00335558008248231",
    ],
    example:
      "Focusing on a conversation at a noisy party while filtering out background noise (cocktail party effect).",
  },
  {
    name: "Working Memory",
    symbol: "WM",
    description:
      "A limited-capacity system for temporarily holding and manipulating information during complex cognitive tasks like reasoning and comprehension.",
    formula: "WM span ≈ 4 ± 1 chunks",
    references: [
      "Baddeley, A. D., & Hitch, G. (1974). Working memory. In G. H. Bower (Ed.), The psychology of learning and motivation (Vol. 8, pp. 47–89). Academic Press. https://doi.org/10.1016/S0079-7421(08)60452-1",
      "Cowan, N. (2001). The magical number 4 in short-term memory: A reconsideration of mental storage capacity. Behavioral and Brain Sciences, 24(1), 87–114. https://doi.org/10.1017/S0140525X01003922",
    ],
    example:
      "Holding a phone number in mind while searching for a pen to write it down.",
  },
  {
    name: "Long-Term Memory",
    symbol: "LTM",
    description:
      "The relatively permanent storage system that holds vast amounts of information for extended periods, from minutes to a lifetime.",
    formula: "Strength = f(encoding depth, rehearsal, spacing)",
    references: [
      "Tulving, E. (1972). Episodic and semantic memory. In E. Tulving & W. Donaldson (Eds.), Organization of memory (pp. 381–403). Academic Press.",
      "Squire, L. R. (2004). Memory systems of the brain: A brief history and current perspective. Neurobiology of Learning and Memory, 82(3), 171–177. https://doi.org/10.1016/j.nlm.2004.06.005",
    ],
    example:
      "Remembering your childhood home address or how to ride a bicycle decades later.",
  },
  {
    name: "Perception",
    symbol: "PER",
    description:
      "The process of organizing and interpreting sensory information to produce meaningful experience of the world.",
    formula: "Percept = f(stimulus, prior knowledge, context)",
    references: [
      "Gibson, J. J. (1979). The ecological approach to visual perception. Houghton Mifflin.",
      "Marr, D. (1982). Vision: A computational investigation into the human representation and processing of visual information. W.H. Freeman.",
    ],
    example:
      "Recognizing a friend's face in a crowd despite varying lighting and angles.",
  },
  {
    name: "Executive Function",
    symbol: "EF",
    description:
      "Higher-order cognitive processes that control and regulate other cognitive abilities and behaviors, including inhibition, shifting, and updating.",
    formula: "EF = inhibition + shifting + updating",
    references: [
      "Miyake, A., Friedman, N. P., Emerson, M. J., Witzki, A. H., Howerter, A., & Wager, T. D. (2000). The unity and diversity of executive functions and their contributions to complex \"frontal lobe\" tasks: A latent variable analysis. Cognitive Psychology, 41(1), 49–100. https://doi.org/10.1006/cogp.1999.0734",
      "Diamond, A. (2013). Executive functions. Annual Review of Psychology, 64, 135–168. https://doi.org/10.1146/annurev-psych-113011-143750",
    ],
    example:
      "Suppressing the urge to check your phone while studying for an exam.",
  },
  {
    name: "Encoding",
    symbol: "ENC",
    description:
      "The initial learning of information — the process of transforming sensory input into a memory representation that can be stored.",
    formula: "Retention = f(depth, elaboration, distinctiveness)",
    references: [
      "Craik, F. I. M., & Lockhart, R. S. (1972). Levels of processing: A framework for memory research. Journal of Verbal Learning and Verbal Behavior, 11(6), 671–684. https://doi.org/10.1016/S0022-5371(72)80001-X",
      "Craik, F. I. M., & Tulving, E. (1975). Depth of processing and the retention of words in episodic memory. Journal of Experimental Psychology: General, 104(3), 268–294. https://doi.org/10.1037/0096-3445.104.3.268",
    ],
    example:
      "Creating a vivid mental image to remember a new vocabulary word.",
  },
  {
    name: "Retrieval",
    symbol: "RET",
    description:
      "The process of accessing stored information from memory. Success depends on the match between encoding context and retrieval cues.",
    formula: "P(recall) = f(cue-target association, interference)",
    references: [
      "Tulving, E., & Thomson, D. M. (1973). Encoding specificity and retrieval processes in episodic memory. Psychological Review, 80(5), 352–373. https://doi.org/10.1037/h0020071",
      "Roediger, H. L., III, & Butler, A. C. (2011). The critical role of retrieval practice in long-term retention. Trends in Cognitive Sciences, 15(1), 20–27. https://doi.org/10.1016/j.tics.2010.09.003",
    ],
    example:
      "A familiar scent triggering a vivid childhood memory.",
  },
  {
    name: "Cognitive Load",
    symbol: "CL",
    description:
      "The total amount of mental effort being used in working memory. Too much load impairs learning and performance.",
    formula: "CL = intrinsic + extraneous + germane",
    references: [
      "Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12(2), 257–285. https://doi.org/10.1207/s15516709cog1202_4",
      "Paas, F., Renkl, A., & Sweller, J. (2003). Cognitive load theory and instructional design: Recent developments. Educational Psychologist, 38(1), 1–4. https://doi.org/10.1207/S15326985EP3801_1",
    ],
    example:
      "A poorly designed textbook that overwhelms students with irrelevant graphics increases extraneous load.",
  },
  {
    name: "Mental Representation",
    symbol: "REP",
    description:
      "Internal cognitive symbols or structures that stand for external reality, including images, propositions, and schemas.",
    formula: "Representation = encode(stimulus, prior knowledge)",
    references: [
      "Paivio, A. (1986). Mental representations: A dual coding approach. Oxford University Press. https://doi.org/10.1093/acprof:oso/9780195066661.001.0001",
      "Johnson-Laird, P. N. (1983). Mental models: Towards a cognitive science of language, inference, and consciousness. Harvard University Press.",
    ],
    example:
      "Your mental map of your neighborhood that allows you to navigate without GPS.",
  },
  {
    name: "Automaticity",
    symbol: "AUTO",
    description:
      "The ability to perform tasks with minimal conscious attention or effort, typically developed through extensive practice.",
    formula: "RT = a + b · log₂(practice trials)",
    references: [
      "Schneider, W., & Shiffrin, R. M. (1977). Controlled and automatic human information processing: I. Detection, search, and attention. Psychological Review, 84(1), 1–66. https://doi.org/10.1037/0033-295X.84.1.1",
      "Logan, G. D. (1988). Toward an instance theory of automatization. Psychological Review, 95(4), 492–527. https://doi.org/10.1037/0033-295X.95.4.492",
    ],
    example:
      "Experienced drivers shifting gears without conscious thought.",
  },
  {
    name: "Inhibition",
    symbol: "INH",
    description:
      "The ability to suppress irrelevant or interfering information and prepotent responses. A core component of executive function.",
    formula: "Interference cost = RT(incongruent) − RT(congruent)",
    references: [
      "Stroop, J. R. (1935). Studies of interference in serial verbal reactions. Journal of Experimental Psychology, 18(6), 643–662. https://doi.org/10.1037/h0054651",
      "Aron, A. R., Robbins, T. W., & Poldrack, R. A. (2004). Inhibition and the right inferior frontal cortex. Trends in Cognitive Sciences, 8(4), 170–177. https://doi.org/10.1016/j.tics.2004.02.010",
    ],
    example:
      "Resisting the impulse to read a word aloud during a Stroop task when asked to name the ink color.",
  },
  {
    name: "Priming",
    symbol: "PRI",
    description:
      "The phenomenon where exposure to one stimulus influences the response to a subsequent stimulus, without conscious awareness.",
    formula: "Priming effect = RT(unprimed) − RT(primed)",
    references: [
      "Meyer, D. E., & Schvaneveldt, R. W. (1971). Facilitation in recognizing pairs of words: Evidence of a dependence between retrieval operations. Journal of Experimental Psychology, 90(2), 227–234. https://doi.org/10.1037/h0031564",
      "Tulving, E., & Schacter, D. L. (1990). Priming and human memory systems. Science, 247(4940), 301–306. https://doi.org/10.1126/science.2296719",
    ],
    example:
      "Reading the word 'doctor' speeds up recognition of the word 'nurse' presented immediately after.",
  },
  {
    name: "Cognitive Flexibility",
    symbol: "FLEX",
    description:
      "The mental ability to switch between thinking about different concepts or to think about multiple concepts simultaneously.",
    formula: "Switch cost = RT(switch trial) − RT(repeat trial)",
    references: [
      "Monsell, S. (2003). Task switching. Trends in Cognitive Sciences, 7(3), 134–140. https://doi.org/10.1016/S1364-6613(03)00028-7",
      "Diamond, A. (2013). Executive functions. Annual Review of Psychology, 64, 135–168. https://doi.org/10.1146/annurev-psych-113011-143750",
    ],
    example:
      "Adapting your communication style when switching from a casual conversation to a formal presentation.",
  },
  {
    name: "Chunking",
    symbol: "CHK",
    description:
      "The process of grouping individual units of information into larger, meaningful units to expand the effective capacity of working memory.",
    formula: "Effective capacity = chunks × items_per_chunk",
    references: [
      "Miller, G. A. (1956). The magical number seven, plus or minus two: Some limits on our capacity for processing information. Psychological Review, 63(2), 81–97. https://doi.org/10.1037/h0043158",
      "Chase, W. G., & Simon, H. A. (1973). Perception in chess. Cognitive Psychology, 4(1), 55–81. https://doi.org/10.1016/0010-0285(73)90004-2",
    ],
    example:
      "Remembering a phone number as 555-867-5309 rather than ten individual digits.",
  },
  {
    name: "Schemas",
    symbol: "SCH",
    description:
      "Organized patterns of thought or behavior that categorize information and the relationships among them. Guide perception, memory, and inference.",
    formula: "Interpretation = schema(stimulus) + context",
    references: [
      "Bartlett, F. C. (1932). Remembering: A study in experimental and social psychology. Cambridge University Press.",
      "Piaget, J. (1952). The origins of intelligence in children. International Universities Press. https://doi.org/10.1037/11494-000",
    ],
    example:
      "Your 'restaurant schema' lets you know to wait to be seated, order food, eat, pay, and leave.",
  },
];

export const theoryModels: TheoryModel[] = [
  {
    name: "Dual-Process Theory",
    category: "Reasoning",
    description:
      "Proposes two systems of thinking: System 1 (fast, automatic, intuitive) and System 2 (slow, deliberate, analytical). Explains why human reasoning is sometimes rational and sometimes biased.",
    formula: "Response = w₁·System1(x) + w₂·System2(x)",
    useCase:
      "Understanding why people rely on heuristics for quick judgments but can override them with deliberate thought.",
    color: "var(--accent)",
  },
  {
    name: "Working Memory Model",
    category: "Memory",
    description:
      "Baddeley's multi-component model with a central executive, phonological loop, visuospatial sketchpad, and episodic buffer. Replaced the unitary short-term memory concept.",
    formula: "WM = CE + PL + VSS + EB",
    useCase:
      "Explaining individual differences in reasoning, comprehension, and learning ability.",
    color: "var(--blue)",
  },
  {
    name: "Levels of Processing",
    category: "Memory",
    description:
      "Craik and Lockhart's framework proposing that memory strength depends on the depth of processing during encoding — from shallow (structural) to deep (semantic).",
    formula: "Memory strength ∝ processing depth",
    useCase:
      "Designing effective study strategies that emphasize meaning over rote repetition.",
    color: "var(--blue)",
  },
  {
    name: "Feature Integration Theory",
    category: "Attention",
    description:
      "Treisman's theory that attention serves to bind individual features (color, shape, orientation) into unified object percepts through focused attention.",
    formula: "Object percept = bind(feature₁, feature₂, ..., featureₙ)",
    useCase:
      "Explaining visual search asymmetries and illusory conjunctions in crowded displays.",
    color: "var(--green)",
  },
  {
    name: "Prospect Theory",
    category: "Decision Making",
    description:
      "Kahneman and Tversky's model showing that people evaluate outcomes relative to a reference point, are loss-averse, and weight probabilities nonlinearly.",
    formula: "V = Σ π(pᵢ) · v(xᵢ)",
    useCase:
      "Explaining risk aversion for gains and risk seeking for losses in economic decisions.",
    color: "var(--gold)",
  },
  {
    name: "Atkinson-Shiffrin Model",
    category: "Memory",
    description:
      "The classic multi-store model proposing three sequential memory stores: sensory register, short-term store, and long-term store, with control processes governing information flow.",
    formula: "Sensory → STM → LTM",
    useCase:
      "Providing a foundational framework for understanding memory as a series of processing stages.",
    color: "var(--blue)",
  },
  {
    name: "Connectionism",
    category: "Computation",
    description:
      "Models cognition as emerging from the activity of interconnected networks of simple processing units (artificial neurons). Knowledge is stored in connection weights.",
    formula: "aⱼ = f(Σ wᵢⱼ · xᵢ + bias)",
    useCase:
      "Modeling pattern recognition, language learning, and graceful degradation after brain damage.",
    color: "var(--accent)",
  },
  {
    name: "Global Workspace Theory",
    category: "Consciousness",
    description:
      "Baars' theory that conscious awareness arises when information is broadcast widely across the brain via a 'global workspace,' making it available to multiple cognitive processes.",
    formula: "Consciousness = broadcast(local → global)",
    useCase:
      "Explaining the difference between conscious and unconscious processing in the brain.",
    color: "var(--accent)",
  },
  {
    name: "Embodied Cognition",
    category: "Computation",
    description:
      "The theory that cognitive processes are deeply rooted in the body's interactions with the world — that the mind is not just in the brain but is shaped by the entire body.",
    formula: "Cognition = f(brain, body, environment)",
    useCase:
      "Understanding how physical gestures facilitate mathematical reasoning and language comprehension.",
    color: "var(--accent)",
  },
  {
    name: "Cognitive Load Theory",
    category: "Education",
    description:
      "Sweller's theory that learning is optimized when instructional design accounts for the limited capacity of working memory and leverages existing schemas in long-term memory.",
    formula: "Learning = f(intrinsic + extraneous + germane load)",
    useCase:
      "Designing instructional materials that minimize extraneous processing and maximize germane engagement.",
    color: "var(--green)",
  },
  {
    name: "Signal Detection Theory",
    category: "Perception",
    description:
      "A mathematical framework for analyzing decision-making under uncertainty, separating an observer's sensitivity (d') from their response criterion (β).",
    formula: "d' = z(Hit Rate) − z(False Alarm Rate)",
    useCase:
      "Measuring perceptual sensitivity independent of response bias in detection tasks.",
    color: "var(--gold)",
  },
  {
    name: "Predictive Processing",
    category: "Perception",
    description:
      "The brain as a prediction machine: perception arises from top-down predictions about incoming sensory data, with learning driven by prediction errors.",
    formula: "Percept = prediction − prediction_error",
    useCase:
      "Explaining illusions, hallucinations, and the brain's efficiency in processing familiar stimuli.",
    color: "var(--gold)",
  },
];

export const methods: Method[] = [
  {
    name: "Functional MRI (fMRI)",
    type: "neuroimaging",
    parameters: "BOLD signal, TR ≈ 1–2s",
    support: "Whole brain, 1–3mm resolution",
    description:
      "Measures brain activity by detecting changes in blood oxygenation. High spatial resolution but limited temporal resolution.",
    cognitiveUse:
      "Localizing brain regions involved in specific cognitive tasks and mapping functional networks.",
  },
  {
    name: "Electroencephalography (EEG)",
    type: "neuroimaging",
    parameters: "μV signal, sampling ≥ 250Hz",
    support: "Scalp electrodes, ms temporal resolution",
    description:
      "Records electrical activity from the scalp. Excellent temporal resolution for tracking rapid cognitive processes.",
    cognitiveUse:
      "Studying the time course of attention, language processing, and memory encoding via ERPs.",
  },
  {
    name: "Reaction Time",
    type: "behavioral",
    parameters: "Accuracy, RT in ms",
    support: "Simple RT ≈ 200ms, Choice RT ≈ 400–600ms",
    description:
      "The time between stimulus presentation and response. The most fundamental measure in experimental psychology.",
    cognitiveUse:
      "Inferring the speed and efficiency of cognitive processing stages.",
  },
  {
    name: "Eye Tracking",
    type: "behavioral",
    parameters: "Fixation duration, saccade amplitude",
    support: "60–2000Hz sampling rate",
    description:
      "Records eye position and movement to reveal where, when, and how long people look at visual information.",
    cognitiveUse:
      "Studying reading, visual search, scene perception, and attentional allocation in real time.",
  },
  {
    name: "Transcranial Magnetic Stimulation (TMS)",
    type: "neuroimaging",
    parameters: "Pulse intensity (% motor threshold)",
    support: "Focal cortical stimulation, ~1cm²",
    description:
      "Uses magnetic pulses to temporarily disrupt or enhance neural activity in targeted brain regions.",
    cognitiveUse:
      "Establishing causal links between brain regions and cognitive functions.",
  },
  {
    name: "Psychophysics",
    type: "behavioral",
    parameters: "Threshold, JND, Weber fraction",
    support: "Stimulus intensity continuum",
    description:
      "Quantifies the relationship between physical stimuli and psychological sensation using precise measurement techniques.",
    cognitiveUse:
      "Determining sensory thresholds and the limits of perceptual discrimination.",
  },
  {
    name: "Priming Paradigm",
    type: "behavioral",
    parameters: "SOA, prime-target relationship",
    support: "RT difference (ms)",
    description:
      "Measures how prior exposure to a stimulus affects processing of a subsequent stimulus, revealing implicit memory and associations.",
    cognitiveUse:
      "Investigating automatic semantic activation and implicit memory without conscious awareness.",
  },
  {
    name: "Dual-Task Paradigm",
    type: "behavioral",
    parameters: "Task 1 + Task 2 performance",
    support: "Dual-task cost = single − dual",
    description:
      "Requires participants to perform two tasks simultaneously to measure attentional capacity and resource sharing.",
    cognitiveUse:
      "Testing theories about the automaticity of cognitive processes and attentional bottlenecks.",
  },
  {
    name: "Think-Aloud Protocol",
    type: "behavioral",
    parameters: "Verbal protocol analysis",
    support: "Qualitative + coded categories",
    description:
      "Participants verbalize their thoughts while performing a task, providing a window into ongoing cognitive processes.",
    cognitiveUse:
      "Studying problem-solving strategies, decision-making processes, and reasoning steps.",
  },
  {
    name: "Signal Detection Analysis",
    type: "behavioral",
    parameters: "Hits, Misses, FAs, CRs",
    support: "d' (sensitivity), β (criterion)",
    description:
      "Separates an observer's perceptual sensitivity from their decision criterion in detection and discrimination tasks.",
    cognitiveUse:
      "Measuring perceptual ability independent of response bias in clinical and experimental settings.",
  },
  {
    name: "Event-Related Potentials (ERPs)",
    type: "neuroimaging",
    parameters: "P300, N400, N170, MMN",
    support: "μV amplitude, ms latency",
    description:
      "Time-locked EEG responses to specific events, revealing the precise timing of cognitive processes.",
    cognitiveUse:
      "Tracking the temporal dynamics of attention (P300), semantic processing (N400), and face recognition (N170).",
  },
  {
    name: "Computational Modeling",
    type: "behavioral",
    parameters: "Free parameters, fit statistics",
    support: "AIC, BIC, log-likelihood",
    description:
      "Mathematical models that simulate cognitive processes, generating quantitative predictions testable against behavioral data.",
    cognitiveUse:
      "Formalizing theories of learning, memory, and decision making into precise, testable models.",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "Reasoning", label: "Reasoning" },
  { id: "Memory", label: "Memory" },
  { id: "Attention", label: "Attention" },
  { id: "Decision Making", label: "Decision Making" },
  { id: "Perception", label: "Perception" },
  { id: "Computation", label: "Computation" },
  { id: "Consciousness", label: "Consciousness" },
  { id: "Education", label: "Education" },
];
