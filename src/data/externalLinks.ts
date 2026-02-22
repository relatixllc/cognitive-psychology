export interface ExternalLink {
  title: string;
  url: string;
  source: string;
}

export const externalLinks: Record<string, ExternalLink[]> = {
  // ═══════════════════════════════════════════════════════════
  // PERCEPTION
  // ═══════════════════════════════════════════════════════════
  "Visual_Perception": [
    { title: "Visual perception", url: "https://en.wikipedia.org/wiki/Visual_perception", source: "Wikipedia" },
    { title: "Visual perception research", url: "https://scholar.google.com/scholar?q=visual+perception+cognitive+psychology", source: "Google Scholar" },
    { title: "Perception", url: "https://dictionary.apa.org/perception", source: "APA Dictionary" },
    { title: "The Ecology of Human Visual Perception", url: "https://scholar.google.com/scholar?q=Gibson+ecological+approach+visual+perception", source: "Google Scholar" },
  ],
  "Color_Perception": [
    { title: "Color vision", url: "https://en.wikipedia.org/wiki/Color_vision", source: "Wikipedia" },
    { title: "Color perception research", url: "https://scholar.google.com/scholar?q=color+perception+trichromatic+opponent+process", source: "Google Scholar" },
    { title: "Color vision", url: "https://dictionary.apa.org/color-vision", source: "APA Dictionary" },
  ],
  "Depth_Perception": [
    { title: "Depth perception", url: "https://en.wikipedia.org/wiki/Depth_perception", source: "Wikipedia" },
    { title: "Depth perception research", url: "https://scholar.google.com/scholar?q=depth+perception+binocular+monocular+cues", source: "Google Scholar" },
    { title: "Depth perception", url: "https://dictionary.apa.org/depth-perception", source: "APA Dictionary" },
  ],
  "Motion_Perception": [
    { title: "Motion perception", url: "https://en.wikipedia.org/wiki/Motion_perception", source: "Wikipedia" },
    { title: "Motion perception research", url: "https://scholar.google.com/scholar?q=motion+perception+visual+system", source: "Google Scholar" },
    { title: "Motion perception", url: "https://dictionary.apa.org/motion-perception", source: "APA Dictionary" },
  ],
  "Object_Recognition": [
    { title: "Object recognition", url: "https://en.wikipedia.org/wiki/Object_recognition", source: "Wikipedia" },
    { title: "Object recognition research", url: "https://scholar.google.com/scholar?q=object+recognition+visual+cognition", source: "Google Scholar" },
    { title: "Recognition by Components (Biederman)", url: "https://scholar.google.com/scholar?q=Biederman+recognition+by+components+1987", source: "Google Scholar" },
  ],
  "Face_Perception": [
    { title: "Face perception", url: "https://en.wikipedia.org/wiki/Face_perception", source: "Wikipedia" },
    { title: "Face perception research", url: "https://scholar.google.com/scholar?q=face+perception+fusiform+face+area", source: "Google Scholar" },
    { title: "Prosopagnosia", url: "https://en.wikipedia.org/wiki/Prosopagnosia", source: "Wikipedia" },
  ],
  "Visual_Illusions": [
    { title: "Optical illusion", url: "https://en.wikipedia.org/wiki/Optical_illusion", source: "Wikipedia" },
    { title: "Visual illusions research", url: "https://scholar.google.com/scholar?q=visual+illusions+perceptual+psychology", source: "Google Scholar" },
    { title: "Illusion", url: "https://dictionary.apa.org/illusion", source: "APA Dictionary" },
  ],
  "Auditory_Perception": [
    { title: "Auditory perception", url: "https://en.wikipedia.org/wiki/Auditory_system", source: "Wikipedia" },
    { title: "Auditory perception research", url: "https://scholar.google.com/scholar?q=auditory+perception+cognitive+psychology", source: "Google Scholar" },
    { title: "Auditory perception", url: "https://dictionary.apa.org/auditory-perception", source: "APA Dictionary" },
  ],
  "Speech_Perception": [
    { title: "Speech perception", url: "https://en.wikipedia.org/wiki/Speech_perception", source: "Wikipedia" },
    { title: "Speech perception research", url: "https://scholar.google.com/scholar?q=speech+perception+categorical+perception", source: "Google Scholar" },
    { title: "Motor theory of speech perception", url: "https://en.wikipedia.org/wiki/Motor_theory_of_speech_perception", source: "Wikipedia" },
  ],
  "Music_Cognition": [
    { title: "Music cognition", url: "https://en.wikipedia.org/wiki/Music_cognition", source: "Wikipedia" },
    { title: "Music cognition research", url: "https://scholar.google.com/scholar?q=music+cognition+psychology", source: "Google Scholar" },
    { title: "Psychology of music", url: "https://en.wikipedia.org/wiki/Psychology_of_music", source: "Wikipedia" },
  ],
  "Auditory_Scene_Analysis": [
    { title: "Auditory scene analysis", url: "https://en.wikipedia.org/wiki/Auditory_scene_analysis", source: "Wikipedia" },
    { title: "Auditory scene analysis (Bregman)", url: "https://scholar.google.com/scholar?q=Bregman+auditory+scene+analysis", source: "Google Scholar" },
    { title: "Auditory streaming", url: "https://dictionary.apa.org/auditory-streaming", source: "APA Dictionary" },
  ],
  "Somatosensory_Perception": [
    { title: "Somatosensory system", url: "https://en.wikipedia.org/wiki/Somatosensory_system", source: "Wikipedia" },
    { title: "Somatosensory perception research", url: "https://scholar.google.com/scholar?q=somatosensory+perception+touch+cognition", source: "Google Scholar" },
    { title: "Haptic perception", url: "https://en.wikipedia.org/wiki/Haptic_perception", source: "Wikipedia" },
  ],
  "Olfactory_Perception": [
    { title: "Olfaction", url: "https://en.wikipedia.org/wiki/Olfaction", source: "Wikipedia" },
    { title: "Olfactory perception research", url: "https://scholar.google.com/scholar?q=olfactory+perception+smell+cognition", source: "Google Scholar" },
    { title: "Olfactory perception", url: "https://dictionary.apa.org/olfactory-perception", source: "APA Dictionary" },
  ],
  "Gustatory_Perception": [
    { title: "Taste", url: "https://en.wikipedia.org/wiki/Taste", source: "Wikipedia" },
    { title: "Gustatory perception research", url: "https://scholar.google.com/scholar?q=gustatory+perception+taste+cognition", source: "Google Scholar" },
    { title: "Gustatory system", url: "https://en.wikipedia.org/wiki/Gustatory_system", source: "Wikipedia" },
  ],
  "Multisensory_Integration": [
    { title: "Multisensory integration", url: "https://en.wikipedia.org/wiki/Multisensory_integration", source: "Wikipedia" },
    { title: "Multisensory integration research", url: "https://scholar.google.com/scholar?q=multisensory+integration+crossmodal+perception", source: "Google Scholar" },
    { title: "McGurk effect", url: "https://en.wikipedia.org/wiki/McGurk_effect", source: "Wikipedia" },
  ],
  "Gestalt_Principles": [
    { title: "Gestalt psychology", url: "https://en.wikipedia.org/wiki/Gestalt_psychology", source: "Wikipedia" },
    { title: "Gestalt principles research", url: "https://scholar.google.com/scholar?q=Gestalt+principles+perceptual+organization", source: "Google Scholar" },
    { title: "Gestalt principles of perception", url: "https://dictionary.apa.org/gestalt-principles-of-perceptual-organization", source: "APA Dictionary" },
    { title: "Principles of perceptual grouping", url: "https://scholar.google.com/scholar?q=Wertheimer+principles+perceptual+grouping", source: "Google Scholar" },
  ],
  "Figure_Ground_Perception": [
    { title: "Figure–ground (perception)", url: "https://en.wikipedia.org/wiki/Figure%E2%80%93ground_(perception)", source: "Wikipedia" },
    { title: "Figure-ground perception research", url: "https://scholar.google.com/scholar?q=figure+ground+perception+segregation", source: "Google Scholar" },
    { title: "Figure-ground perception", url: "https://dictionary.apa.org/figure-ground-perception", source: "APA Dictionary" },
  ],
  "Perceptual_Constancy": [
    { title: "Perceptual constancy", url: "https://en.wikipedia.org/wiki/Perceptual_constancy", source: "Wikipedia" },
    { title: "Perceptual constancy research", url: "https://scholar.google.com/scholar?q=perceptual+constancy+size+shape+color", source: "Google Scholar" },
    { title: "Perceptual constancy", url: "https://dictionary.apa.org/perceptual-constancy", source: "APA Dictionary" },
  ],
  "Signal_Detection_Theory": [
    { title: "Signal detection theory", url: "https://en.wikipedia.org/wiki/Detection_theory", source: "Wikipedia" },
    { title: "Signal detection theory research", url: "https://scholar.google.com/scholar?q=signal+detection+theory+Green+Swets", source: "Google Scholar" },
    { title: "Signal detection theory", url: "https://dictionary.apa.org/signal-detection-theory", source: "APA Dictionary" },
    { title: "Signal Detection Theory and Psychophysics (Green & Swets)", url: "https://scholar.google.com/scholar?q=%22Signal+Detection+Theory+and+Psychophysics%22", source: "Google Scholar" },
  ],
  "Change_Blindness": [
    { title: "Change blindness", url: "https://en.wikipedia.org/wiki/Change_blindness", source: "Wikipedia" },
    { title: "Change blindness research", url: "https://scholar.google.com/scholar?q=change+blindness+Simons+Levin", source: "Google Scholar" },
    { title: "Change blindness", url: "https://dictionary.apa.org/change-blindness", source: "APA Dictionary" },
  ],

  // ═══════════════════════════════════════════════════════════
  // ATTENTION
  // ═══════════════════════════════════════════════════════════
  "Selective_Attention": [
    { title: "Selective attention", url: "https://en.wikipedia.org/wiki/Selective_attention", source: "Wikipedia" },
    { title: "Selective attention research", url: "https://scholar.google.com/scholar?q=selective+attention+cognitive+psychology", source: "Google Scholar" },
    { title: "Selective attention", url: "https://dictionary.apa.org/selective-attention", source: "APA Dictionary" },
  ],
  "Divided_Attention": [
    { title: "Divided attention", url: "https://en.wikipedia.org/wiki/Divided_attention", source: "Wikipedia" },
    { title: "Divided attention research", url: "https://scholar.google.com/scholar?q=divided+attention+dual+task+performance", source: "Google Scholar" },
    { title: "Divided attention", url: "https://dictionary.apa.org/divided-attention", source: "APA Dictionary" },
  ],
  "Sustained_Attention": [
    { title: "Sustained attention", url: "https://en.wikipedia.org/wiki/Sustained_attention", source: "Wikipedia" },
    { title: "Sustained attention research", url: "https://scholar.google.com/scholar?q=sustained+attention+vigilance+cognitive", source: "Google Scholar" },
    { title: "Sustained attention", url: "https://dictionary.apa.org/sustained-attention", source: "APA Dictionary" },
  ],
  "Exogenous_Attention": [
    { title: "Posner cueing task", url: "https://en.wikipedia.org/wiki/Posner_cueing_task", source: "Wikipedia" },
    { title: "Exogenous attention research", url: "https://scholar.google.com/scholar?q=exogenous+attention+stimulus+driven+orienting", source: "Google Scholar" },
    { title: "Exogenous attention", url: "https://dictionary.apa.org/exogenous-attention", source: "APA Dictionary" },
  ],
  "Endogenous_Attention": [
    { title: "Endogenous attention", url: "https://en.wikipedia.org/wiki/Endogenous_attention", source: "Wikipedia" },
    { title: "Endogenous attention research", url: "https://scholar.google.com/scholar?q=endogenous+attention+voluntary+top+down", source: "Google Scholar" },
    { title: "Endogenous attention", url: "https://dictionary.apa.org/endogenous-attention", source: "APA Dictionary" },
  ],
  "Inattentional_Blindness": [
    { title: "Inattentional blindness", url: "https://en.wikipedia.org/wiki/Inattentional_blindness", source: "Wikipedia" },
    { title: "Inattentional blindness research", url: "https://scholar.google.com/scholar?q=inattentional+blindness+Mack+Rock", source: "Google Scholar" },
    { title: "Inattentional blindness", url: "https://dictionary.apa.org/inattentional-blindness", source: "APA Dictionary" },
    { title: "Gorillas in Our Midst (Simons & Chabris, 1999)", url: "https://scholar.google.com/scholar?q=Simons+Chabris+gorillas+in+our+midst+1999", source: "Google Scholar" },
  ],
  "Attentional_Blink": [
    { title: "Attentional blink", url: "https://en.wikipedia.org/wiki/Attentional_blink", source: "Wikipedia" },
    { title: "Attentional blink research", url: "https://scholar.google.com/scholar?q=attentional+blink+RSVP+temporal+attention", source: "Google Scholar" },
    { title: "Attentional blink", url: "https://dictionary.apa.org/attentional-blink", source: "APA Dictionary" },
  ],
  "Stroop_Effect": [
    { title: "Stroop effect", url: "https://en.wikipedia.org/wiki/Stroop_effect", source: "Wikipedia" },
    { title: "Stroop effect research", url: "https://scholar.google.com/scholar?q=Stroop+effect+interference+cognitive+control", source: "Google Scholar" },
    { title: "Stroop effect", url: "https://dictionary.apa.org/stroop-effect", source: "APA Dictionary" },
  ],
  "Cocktail_Party_Effect": [
    { title: "Cocktail party effect", url: "https://en.wikipedia.org/wiki/Cocktail_party_effect", source: "Wikipedia" },
    { title: "Cocktail party effect research", url: "https://scholar.google.com/scholar?q=cocktail+party+effect+Cherry+selective+attention", source: "Google Scholar" },
    { title: "Cocktail party effect", url: "https://dictionary.apa.org/cocktail-party-effect", source: "APA Dictionary" },
  ],
  "Inhibition_of_Return": [
    { title: "Inhibition of return", url: "https://en.wikipedia.org/wiki/Inhibition_of_return", source: "Wikipedia" },
    { title: "Inhibition of return research", url: "https://scholar.google.com/scholar?q=inhibition+of+return+Posner+Cohen", source: "Google Scholar" },
    { title: "Inhibition of return", url: "https://dictionary.apa.org/inhibition-of-return", source: "APA Dictionary" },
  ],
  "Filter_Theory_of_Attention": [
    { title: "Broadbent's filter model", url: "https://en.wikipedia.org/wiki/Broadbent%27s_filter_model_of_attention", source: "Wikipedia" },
    { title: "Filter theory research", url: "https://scholar.google.com/scholar?q=Broadbent+filter+theory+attention+1958", source: "Google Scholar" },
    { title: "Attention filter theory", url: "https://dictionary.apa.org/filter-theory", source: "APA Dictionary" },
  ],
  "Feature_Integration_Theory": [
    { title: "Feature integration theory", url: "https://en.wikipedia.org/wiki/Feature_integration_theory", source: "Wikipedia" },
    { title: "Feature integration theory (Treisman & Gelade, 1980)", url: "https://scholar.google.com/scholar?q=Treisman+Gelade+feature+integration+theory+1980", source: "Google Scholar" },
    { title: "Feature integration theory", url: "https://dictionary.apa.org/feature-integration-theory", source: "APA Dictionary" },
  ],
  "Biased_Competition_Model": [
    { title: "Biased competition", url: "https://en.wikipedia.org/wiki/Biased_competition_theory", source: "Wikipedia" },
    { title: "Biased competition model research", url: "https://scholar.google.com/scholar?q=Desimone+Duncan+biased+competition+attention", source: "Google Scholar" },
    { title: "Neural mechanisms of selective visual attention (Desimone & Duncan, 1995)", url: "https://scholar.google.com/scholar?q=%22Neural+mechanisms+of+selective+visual+attention%22+Desimone+Duncan", source: "Google Scholar" },
  ],
  "Attentional_Control_Theory": [
    { title: "Attentional control", url: "https://en.wikipedia.org/wiki/Attentional_control", source: "Wikipedia" },
    { title: "Attentional control theory (Eysenck et al.)", url: "https://scholar.google.com/scholar?q=Eysenck+attentional+control+theory+anxiety", source: "Google Scholar" },
    { title: "Attentional control", url: "https://dictionary.apa.org/attentional-control", source: "APA Dictionary" },
  ],
  "Multiple_Resource_Theory": [
    { title: "Multiple resource theory", url: "https://en.wikipedia.org/wiki/Multiple_resource_theory", source: "Wikipedia" },
    { title: "Multiple resource theory (Wickens)", url: "https://scholar.google.com/scholar?q=Wickens+multiple+resource+theory+attention", source: "Google Scholar" },
    { title: "Multiple resources and mental workload", url: "https://scholar.google.com/scholar?q=Wickens+multiple+resources+mental+workload+2008", source: "Google Scholar" },
  ],
  "Visual_Search": [
    { title: "Visual search", url: "https://en.wikipedia.org/wiki/Visual_search", source: "Wikipedia" },
    { title: "Visual search research", url: "https://scholar.google.com/scholar?q=visual+search+attention+cognitive+psychology", source: "Google Scholar" },
    { title: "Visual search", url: "https://dictionary.apa.org/visual-search", source: "APA Dictionary" },
  ],
  "Pop_Out_Effect": [
    { title: "Pop-out effect", url: "https://en.wikipedia.org/wiki/Pop-out_effect", source: "Wikipedia" },
    { title: "Pop-out effect research", url: "https://scholar.google.com/scholar?q=pop+out+effect+preattentive+visual+search", source: "Google Scholar" },
    { title: "Feature search and pop-out (Treisman)", url: "https://scholar.google.com/scholar?q=Treisman+pop+out+feature+search+preattentive", source: "Google Scholar" },
  ],
  "Conjunction_Search": [
    { title: "Visual search — Conjunction search", url: "https://en.wikipedia.org/wiki/Visual_search", source: "Wikipedia" },
    { title: "Conjunction search research", url: "https://scholar.google.com/scholar?q=conjunction+search+serial+attention+Treisman", source: "Google Scholar" },
    { title: "Conjunction search and feature integration", url: "https://scholar.google.com/scholar?q=conjunction+search+feature+integration+theory", source: "Google Scholar" },
  ],
  "Guided_Search_Model": [
    { title: "Guided search model", url: "https://en.wikipedia.org/wiki/Guided_search", source: "Wikipedia" },
    { title: "Guided search model (Wolfe)", url: "https://scholar.google.com/scholar?q=Wolfe+guided+search+model+visual+attention", source: "Google Scholar" },
    { title: "Guided Search 2.0 (Wolfe, 1994)", url: "https://scholar.google.com/scholar?q=Wolfe+%22Guided+Search+2.0%22+1994", source: "Google Scholar" },
  ],

  // ═══════════════════════════════════════════════════════════
  // MEMORY
  // ═══════════════════════════════════════════════════════════
  "Sensory_Memory": [
    { title: "Sensory memory", url: "https://en.wikipedia.org/wiki/Sensory_memory", source: "Wikipedia" },
    { title: "Sensory memory research", url: "https://scholar.google.com/scholar?q=sensory+memory+iconic+echoic+Sperling", source: "Google Scholar" },
    { title: "Sensory memory", url: "https://dictionary.apa.org/sensory-memory", source: "APA Dictionary" },
  ],
  "Short_Term_Memory": [
    { title: "Short-term memory", url: "https://en.wikipedia.org/wiki/Short-term_memory", source: "Wikipedia" },
    { title: "Short-term memory research", url: "https://scholar.google.com/scholar?q=short+term+memory+capacity+duration", source: "Google Scholar" },
    { title: "Short-term memory", url: "https://dictionary.apa.org/short-term-memory", source: "APA Dictionary" },
    { title: "The magical number seven (Miller, 1956)", url: "https://scholar.google.com/scholar?q=Miller+magical+number+seven+1956", source: "Google Scholar" },
  ],
  "Working_Memory": [
    { title: "Working memory", url: "https://en.wikipedia.org/wiki/Working_memory", source: "Wikipedia" },
    { title: "Working memory research", url: "https://scholar.google.com/scholar?q=Baddeley+Hitch+working+memory+model", source: "Google Scholar" },
    { title: "Working memory", url: "https://dictionary.apa.org/working-memory", source: "APA Dictionary" },
    { title: "Working Memory (Baddeley, 1992)", url: "https://scholar.google.com/scholar?q=Baddeley+%22Working+Memory%22+1992+Science", source: "Google Scholar" },
  ],
  "Long_Term_Memory": [
    { title: "Long-term memory", url: "https://en.wikipedia.org/wiki/Long-term_memory", source: "Wikipedia" },
    { title: "Long-term memory research", url: "https://scholar.google.com/scholar?q=long+term+memory+encoding+retrieval+storage", source: "Google Scholar" },
    { title: "Long-term memory", url: "https://dictionary.apa.org/long-term-memory", source: "APA Dictionary" },
  ],
  "Episodic_Memory": [
    { title: "Episodic memory", url: "https://en.wikipedia.org/wiki/Episodic_memory", source: "Wikipedia" },
    { title: "Episodic memory research", url: "https://scholar.google.com/scholar?q=Tulving+episodic+memory+autonoetic+consciousness", source: "Google Scholar" },
    { title: "Episodic memory", url: "https://dictionary.apa.org/episodic-memory", source: "APA Dictionary" },
  ],
  "Semantic_Memory": [
    { title: "Semantic memory", url: "https://en.wikipedia.org/wiki/Semantic_memory", source: "Wikipedia" },
    { title: "Semantic memory research", url: "https://scholar.google.com/scholar?q=semantic+memory+knowledge+representation+Tulving", source: "Google Scholar" },
    { title: "Semantic memory", url: "https://dictionary.apa.org/semantic-memory", source: "APA Dictionary" },
  ],
  "Procedural_Memory": [
    { title: "Procedural memory", url: "https://en.wikipedia.org/wiki/Procedural_memory", source: "Wikipedia" },
    { title: "Procedural memory research", url: "https://scholar.google.com/scholar?q=procedural+memory+implicit+skill+learning", source: "Google Scholar" },
    { title: "Procedural memory", url: "https://dictionary.apa.org/procedural-memory", source: "APA Dictionary" },
  ],
  "Levels_of_Processing": [
    { title: "Levels-of-processing effect", url: "https://en.wikipedia.org/wiki/Levels-of-processing_effect", source: "Wikipedia" },
    { title: "Levels of processing (Craik & Lockhart, 1972)", url: "https://scholar.google.com/scholar?q=Craik+Lockhart+levels+of+processing+1972", source: "Google Scholar" },
    { title: "Levels of processing", url: "https://dictionary.apa.org/levels-of-processing-model", source: "APA Dictionary" },
  ],
  "Elaborative_Rehearsal": [
    { title: "Elaborative rehearsal", url: "https://en.wikipedia.org/wiki/Elaborative_encoding", source: "Wikipedia" },
    { title: "Elaborative rehearsal research", url: "https://scholar.google.com/scholar?q=elaborative+rehearsal+deep+processing+memory", source: "Google Scholar" },
    { title: "Elaborative rehearsal", url: "https://dictionary.apa.org/elaborative-rehearsal", source: "APA Dictionary" },
  ],
  "Schema_Theory": [
    { title: "Schema (psychology)", url: "https://en.wikipedia.org/wiki/Schema_(psychology)", source: "Wikipedia" },
    { title: "Schema theory research", url: "https://scholar.google.com/scholar?q=schema+theory+Bartlett+memory+cognition", source: "Google Scholar" },
    { title: "Schema", url: "https://dictionary.apa.org/schema", source: "APA Dictionary" },
  ],
  "Dual_Coding_Theory": [
    { title: "Dual-coding theory", url: "https://en.wikipedia.org/wiki/Dual-coding_theory", source: "Wikipedia" },
    { title: "Dual coding theory (Paivio)", url: "https://scholar.google.com/scholar?q=Paivio+dual+coding+theory+imagery+verbal", source: "Google Scholar" },
    { title: "Dual-coding theory", url: "https://dictionary.apa.org/dual-coding-theory", source: "APA Dictionary" },
  ],
  "Memory_Consolidation": [
    { title: "Memory consolidation", url: "https://en.wikipedia.org/wiki/Memory_consolidation", source: "Wikipedia" },
    { title: "Memory consolidation research", url: "https://scholar.google.com/scholar?q=memory+consolidation+hippocampus+sleep", source: "Google Scholar" },
    { title: "Memory consolidation", url: "https://dictionary.apa.org/memory-consolidation", source: "APA Dictionary" },
  ],
  "Recall_vs_Recognition": [
    { title: "Recall (memory)", url: "https://en.wikipedia.org/wiki/Recall_(memory)", source: "Wikipedia" },
    { title: "Recognition memory", url: "https://en.wikipedia.org/wiki/Recognition_memory", source: "Wikipedia" },
    { title: "Recall vs recognition research", url: "https://scholar.google.com/scholar?q=recall+versus+recognition+memory+retrieval", source: "Google Scholar" },
  ],
  "Encoding_Specificity": [
    { title: "Encoding specificity principle", url: "https://en.wikipedia.org/wiki/Encoding_specificity_principle", source: "Wikipedia" },
    { title: "Encoding specificity (Tulving & Thomson, 1973)", url: "https://scholar.google.com/scholar?q=Tulving+Thomson+encoding+specificity+1973", source: "Google Scholar" },
    { title: "Encoding specificity", url: "https://dictionary.apa.org/encoding-specificity", source: "APA Dictionary" },
  ],
  "Forgetting_Curve": [
    { title: "Forgetting curve", url: "https://en.wikipedia.org/wiki/Forgetting_curve", source: "Wikipedia" },
    { title: "Ebbinghaus forgetting curve research", url: "https://scholar.google.com/scholar?q=Ebbinghaus+forgetting+curve+retention", source: "Google Scholar" },
    { title: "Forgetting curve", url: "https://dictionary.apa.org/forgetting-curve", source: "APA Dictionary" },
  ],
  "Interference_Theory": [
    { title: "Interference theory", url: "https://en.wikipedia.org/wiki/Interference_theory", source: "Wikipedia" },
    { title: "Interference theory research", url: "https://scholar.google.com/scholar?q=interference+theory+proactive+retroactive+forgetting", source: "Google Scholar" },
    { title: "Interference", url: "https://dictionary.apa.org/interference", source: "APA Dictionary" },
  ],
  "Retrieval_Induced_Forgetting": [
    { title: "Retrieval-induced forgetting", url: "https://en.wikipedia.org/wiki/Retrieval-induced_forgetting", source: "Wikipedia" },
    { title: "Retrieval-induced forgetting (Anderson et al., 1994)", url: "https://scholar.google.com/scholar?q=Anderson+Bjork+Bjork+retrieval+induced+forgetting+1994", source: "Google Scholar" },
    { title: "Retrieval-induced forgetting", url: "https://dictionary.apa.org/retrieval-induced-forgetting", source: "APA Dictionary" },
  ],
  "Tip_of_the_Tongue": [
    { title: "Tip of the tongue", url: "https://en.wikipedia.org/wiki/Tip_of_the_tongue", source: "Wikipedia" },
    { title: "Tip-of-the-tongue research", url: "https://scholar.google.com/scholar?q=tip+of+the+tongue+phenomenon+Brown+McNeill", source: "Google Scholar" },
    { title: "Tip-of-the-tongue phenomenon", url: "https://dictionary.apa.org/tip-of-the-tongue-phenomenon", source: "APA Dictionary" },
  ],
  "False_Memories": [
    { title: "False memory", url: "https://en.wikipedia.org/wiki/False_memory", source: "Wikipedia" },
    { title: "False memories research", url: "https://scholar.google.com/scholar?q=false+memories+Loftus+Deese+Roediger+McDermott", source: "Google Scholar" },
    { title: "False memory", url: "https://dictionary.apa.org/false-memory", source: "APA Dictionary" },
    { title: "DRM paradigm", url: "https://en.wikipedia.org/wiki/Deese%E2%80%93Roediger%E2%80%93McDermott_paradigm", source: "Wikipedia" },
  ],
  "Flashbulb_Memory": [
    { title: "Flashbulb memory", url: "https://en.wikipedia.org/wiki/Flashbulb_memory", source: "Wikipedia" },
    { title: "Flashbulb memory research", url: "https://scholar.google.com/scholar?q=flashbulb+memory+Brown+Kulik+1977", source: "Google Scholar" },
    { title: "Flashbulb memory", url: "https://dictionary.apa.org/flashbulb-memory", source: "APA Dictionary" },
  ],
  "Prospective_Memory": [
    { title: "Prospective memory", url: "https://en.wikipedia.org/wiki/Prospective_memory", source: "Wikipedia" },
    { title: "Prospective memory research", url: "https://scholar.google.com/scholar?q=prospective+memory+remembering+future+intentions", source: "Google Scholar" },
    { title: "Prospective memory", url: "https://dictionary.apa.org/prospective-memory", source: "APA Dictionary" },
  ],
  "Autobiographical_Memory": [
    { title: "Autobiographical memory", url: "https://en.wikipedia.org/wiki/Autobiographical_memory", source: "Wikipedia" },
    { title: "Autobiographical memory research", url: "https://scholar.google.com/scholar?q=autobiographical+memory+Conway+self", source: "Google Scholar" },
    { title: "Autobiographical memory", url: "https://dictionary.apa.org/autobiographical-memory", source: "APA Dictionary" },
  ],
  "Eyewitness_Memory": [
    { title: "Eyewitness memory", url: "https://en.wikipedia.org/wiki/Eyewitness_memory", source: "Wikipedia" },
    { title: "Eyewitness memory research", url: "https://scholar.google.com/scholar?q=eyewitness+memory+Loftus+misinformation+effect", source: "Google Scholar" },
    { title: "Misinformation effect", url: "https://en.wikipedia.org/wiki/Misinformation_effect", source: "Wikipedia" },
  ],
  "Memory_and_Emotion": [
    { title: "Emotion and memory", url: "https://en.wikipedia.org/wiki/Emotion_and_memory", source: "Wikipedia" },
    { title: "Memory and emotion research", url: "https://scholar.google.com/scholar?q=emotion+memory+amygdala+modulation+consolidation", source: "Google Scholar" },
    { title: "Emotional memory", url: "https://dictionary.apa.org/emotional-memory", source: "APA Dictionary" },
  ],

  // ═══════════════════════════════════════════════════════════
  // LEARNING
  // ═══════════════════════════════════════════════════════════
  "Classical_Conditioning": [
    { title: "Classical conditioning", url: "https://en.wikipedia.org/wiki/Classical_conditioning", source: "Wikipedia" },
    { title: "Classical conditioning research", url: "https://scholar.google.com/scholar?q=classical+conditioning+Pavlov+associative+learning", source: "Google Scholar" },
    { title: "Classical conditioning", url: "https://dictionary.apa.org/classical-conditioning", source: "APA Dictionary" },
  ],
  "Operant_Conditioning": [
    { title: "Operant conditioning", url: "https://en.wikipedia.org/wiki/Operant_conditioning", source: "Wikipedia" },
    { title: "Operant conditioning research", url: "https://scholar.google.com/scholar?q=operant+conditioning+Skinner+reinforcement", source: "Google Scholar" },
    { title: "Operant conditioning", url: "https://dictionary.apa.org/operant-conditioning", source: "APA Dictionary" },
  ],
  "Reinforcement_Schedules": [
    { title: "Reinforcement — Schedules", url: "https://en.wikipedia.org/wiki/Reinforcement#Schedules_of_reinforcement", source: "Wikipedia" },
    { title: "Schedules of reinforcement research", url: "https://scholar.google.com/scholar?q=schedules+of+reinforcement+fixed+variable+ratio+interval", source: "Google Scholar" },
    { title: "Schedule of reinforcement", url: "https://dictionary.apa.org/schedule-of-reinforcement", source: "APA Dictionary" },
  ],
  "Extinction_Learning": [
    { title: "Extinction (psychology)", url: "https://en.wikipedia.org/wiki/Extinction_(psychology)", source: "Wikipedia" },
    { title: "Extinction learning research", url: "https://scholar.google.com/scholar?q=extinction+learning+fear+conditioning+inhibition", source: "Google Scholar" },
    { title: "Extinction", url: "https://dictionary.apa.org/extinction", source: "APA Dictionary" },
  ],
  "Stimulus_Generalization": [
    { title: "Stimulus generalization", url: "https://en.wikipedia.org/wiki/Stimulus_generalization", source: "Wikipedia" },
    { title: "Stimulus generalization research", url: "https://scholar.google.com/scholar?q=stimulus+generalization+gradient+discrimination", source: "Google Scholar" },
    { title: "Stimulus generalization", url: "https://dictionary.apa.org/stimulus-generalization", source: "APA Dictionary" },
  ],
  "Observational_Learning": [
    { title: "Observational learning", url: "https://en.wikipedia.org/wiki/Observational_learning", source: "Wikipedia" },
    { title: "Observational learning (Bandura)", url: "https://scholar.google.com/scholar?q=Bandura+observational+learning+social+learning+theory", source: "Google Scholar" },
    { title: "Observational learning", url: "https://dictionary.apa.org/observational-learning", source: "APA Dictionary" },
  ],
  "Latent_Learning": [
    { title: "Latent learning", url: "https://en.wikipedia.org/wiki/Latent_learning", source: "Wikipedia" },
    { title: "Latent learning (Tolman)", url: "https://scholar.google.com/scholar?q=Tolman+latent+learning+cognitive+map", source: "Google Scholar" },
    { title: "Latent learning", url: "https://dictionary.apa.org/latent-learning", source: "APA Dictionary" },
  ],
  "Insight_Learning": [
    { title: "Insight learning", url: "https://en.wikipedia.org/wiki/Insight_learning", source: "Wikipedia" },
    { title: "Insight learning research", url: "https://scholar.google.com/scholar?q=insight+learning+Kohler+aha+moment+problem+solving", source: "Google Scholar" },
    { title: "Insight", url: "https://dictionary.apa.org/insight", source: "APA Dictionary" },
  ],
  "Concept_Learning": [
    { title: "Concept learning", url: "https://en.wikipedia.org/wiki/Concept_learning", source: "Wikipedia" },
    { title: "Concept learning research", url: "https://scholar.google.com/scholar?q=concept+learning+categorization+cognitive+psychology", source: "Google Scholar" },
    { title: "Concept formation", url: "https://dictionary.apa.org/concept-formation", source: "APA Dictionary" },
  ],
  "Rule_Learning": [
    { title: "Rule learning", url: "https://en.wikipedia.org/wiki/Rule_learning", source: "Wikipedia" },
    { title: "Rule learning research", url: "https://scholar.google.com/scholar?q=rule+learning+hypothesis+testing+cognitive", source: "Google Scholar" },
    { title: "Rule-based categorization", url: "https://scholar.google.com/scholar?q=rule+based+categorization+learning+cognitive", source: "Google Scholar" },
  ],
  "Motor_Learning": [
    { title: "Motor learning", url: "https://en.wikipedia.org/wiki/Motor_learning", source: "Wikipedia" },
    { title: "Motor learning research", url: "https://scholar.google.com/scholar?q=motor+learning+skill+acquisition+cognitive", source: "Google Scholar" },
    { title: "Motor learning", url: "https://dictionary.apa.org/motor-learning", source: "APA Dictionary" },
  ],
  "Implicit_Learning": [
    { title: "Implicit learning", url: "https://en.wikipedia.org/wiki/Implicit_learning", source: "Wikipedia" },
    { title: "Implicit learning research", url: "https://scholar.google.com/scholar?q=implicit+learning+Reber+artificial+grammar", source: "Google Scholar" },
    { title: "Implicit learning", url: "https://dictionary.apa.org/implicit-learning", source: "APA Dictionary" },
  ],
  "Expertise_and_Deliberate_Practice": [
    { title: "Practice (learning method) — Deliberate practice", url: "https://en.wikipedia.org/wiki/Practice_(learning_method)#Deliberate_practice", source: "Wikipedia" },
    { title: "Deliberate practice (Ericsson)", url: "https://scholar.google.com/scholar?q=Ericsson+deliberate+practice+expert+performance", source: "Google Scholar" },
    { title: "Expertise", url: "https://en.wikipedia.org/wiki/Expert", source: "Wikipedia" },
    { title: "Expertise and deliberate practice", url: "https://dictionary.apa.org/deliberate-practice", source: "APA Dictionary" },
  ],
  "Transfer_of_Learning": [
    { title: "Transfer of learning", url: "https://en.wikipedia.org/wiki/Transfer_of_learning", source: "Wikipedia" },
    { title: "Transfer of learning research", url: "https://scholar.google.com/scholar?q=transfer+of+learning+near+far+cognitive", source: "Google Scholar" },
    { title: "Transfer of training", url: "https://dictionary.apa.org/transfer-of-training", source: "APA Dictionary" },
  ],
  "Spacing_Effect": [
    { title: "Spacing effect", url: "https://en.wikipedia.org/wiki/Spacing_effect", source: "Wikipedia" },
    { title: "Spacing effect research", url: "https://scholar.google.com/scholar?q=spacing+effect+distributed+practice+memory", source: "Google Scholar" },
    { title: "Spacing effect", url: "https://dictionary.apa.org/spacing-effect", source: "APA Dictionary" },
  ],
  "Rescorla_Wagner_Model": [
    { title: "Rescorla–Wagner model", url: "https://en.wikipedia.org/wiki/Rescorla%E2%80%93Wagner_model", source: "Wikipedia" },
    { title: "Rescorla-Wagner model research", url: "https://scholar.google.com/scholar?q=Rescorla+Wagner+model+associative+learning+1972", source: "Google Scholar" },
    { title: "A theory of Pavlovian conditioning (Rescorla & Wagner, 1972)", url: "https://scholar.google.com/scholar?q=%22A+theory+of+Pavlovian+conditioning%22+Rescorla+Wagner", source: "Google Scholar" },
  ],
  "Computational_Models_of_Learning": [
    { title: "Computational learning theory", url: "https://en.wikipedia.org/wiki/Computational_learning_theory", source: "Wikipedia" },
    { title: "Computational models of learning research", url: "https://scholar.google.com/scholar?q=computational+models+learning+cognition+connectionist", source: "Google Scholar" },
    { title: "Connectionism", url: "https://plato.stanford.edu/entries/connectionism/", source: "Stanford Encyclopedia" },
  ],
  "Error_Driven_Learning": [
    { title: "Error-driven learning", url: "https://en.wikipedia.org/wiki/Error-driven_learning", source: "Wikipedia" },
    { title: "Error-driven learning research", url: "https://scholar.google.com/scholar?q=error+driven+learning+prediction+error+cognitive", source: "Google Scholar" },
    { title: "Prediction error and learning", url: "https://scholar.google.com/scholar?q=prediction+error+learning+dopamine+reward", source: "Google Scholar" },
  ],
  "Statistical_Learning": [
    { title: "Statistical learning in language acquisition", url: "https://en.wikipedia.org/wiki/Statistical_learning_in_language_acquisition", source: "Wikipedia" },
    { title: "Statistical learning research", url: "https://scholar.google.com/scholar?q=statistical+learning+Saffran+transitional+probabilities", source: "Google Scholar" },
    { title: "Statistical Learning by 8-Month-Old Infants (Saffran et al., 1996)", url: "https://scholar.google.com/scholar?q=Saffran+Aslin+Newport+statistical+learning+1996", source: "Google Scholar" },
  ],

  // ═══════════════════════════════════════════════════════════
  // LANGUAGE
  // ═══════════════════════════════════════════════════════════
  "Phonology": [
    { title: "Phonology", url: "https://en.wikipedia.org/wiki/Phonology", source: "Wikipedia" },
    { title: "Phonology research", url: "https://scholar.google.com/scholar?q=phonology+cognitive+psychology+speech+sounds", source: "Google Scholar" },
    { title: "Phonology", url: "https://dictionary.apa.org/phonology", source: "APA Dictionary" },
  ],
  "Morphology_Language": [
    { title: "Morphology (linguistics)", url: "https://en.wikipedia.org/wiki/Morphology_(linguistics)", source: "Wikipedia" },
    { title: "Morphology language research", url: "https://scholar.google.com/scholar?q=morphology+linguistics+word+formation+cognitive", source: "Google Scholar" },
    { title: "Morpheme", url: "https://dictionary.apa.org/morpheme", source: "APA Dictionary" },
  ],
  "Syntax": [
    { title: "Syntax", url: "https://en.wikipedia.org/wiki/Syntax", source: "Wikipedia" },
    { title: "Syntax research", url: "https://scholar.google.com/scholar?q=syntax+sentence+structure+cognitive+linguistics", source: "Google Scholar" },
    { title: "Syntax", url: "https://dictionary.apa.org/syntax", source: "APA Dictionary" },
  ],
  "Semantics": [
    { title: "Semantics", url: "https://en.wikipedia.org/wiki/Semantics", source: "Wikipedia" },
    { title: "Semantics research", url: "https://scholar.google.com/scholar?q=semantics+meaning+language+cognitive+psychology", source: "Google Scholar" },
    { title: "Semantics", url: "https://dictionary.apa.org/semantics", source: "APA Dictionary" },
  ],
  "Pragmatics": [
    { title: "Pragmatics", url: "https://en.wikipedia.org/wiki/Pragmatics", source: "Wikipedia" },
    { title: "Pragmatics research", url: "https://scholar.google.com/scholar?q=pragmatics+language+use+context+Grice", source: "Google Scholar" },
    { title: "Pragmatics", url: "https://dictionary.apa.org/pragmatics", source: "APA Dictionary" },
  ],
  "Language_Comprehension": [
    { title: "Language comprehension", url: "https://en.wikipedia.org/wiki/Language_comprehension", source: "Wikipedia" },
    { title: "Language comprehension research", url: "https://scholar.google.com/scholar?q=language+comprehension+cognitive+processing+models", source: "Google Scholar" },
    { title: "Language comprehension", url: "https://dictionary.apa.org/language-comprehension", source: "APA Dictionary" },
  ],
  "Language_Production": [
    { title: "Language production", url: "https://en.wikipedia.org/wiki/Language_production", source: "Wikipedia" },
    { title: "Language production (Levelt)", url: "https://scholar.google.com/scholar?q=Levelt+language+production+speaking+model", source: "Google Scholar" },
    { title: "Language production", url: "https://dictionary.apa.org/language-production", source: "APA Dictionary" },
  ],
  "Word_Recognition": [
    { title: "Word recognition", url: "https://en.wikipedia.org/wiki/Word_recognition", source: "Wikipedia" },
    { title: "Word recognition research", url: "https://scholar.google.com/scholar?q=visual+word+recognition+lexical+access", source: "Google Scholar" },
    { title: "Word recognition", url: "https://dictionary.apa.org/word-recognition", source: "APA Dictionary" },
  ],
  "Sentence_Processing": [
    { title: "Sentence processing", url: "https://en.wikipedia.org/wiki/Sentence_processing", source: "Wikipedia" },
    { title: "Sentence processing research", url: "https://scholar.google.com/scholar?q=sentence+processing+parsing+garden+path", source: "Google Scholar" },
    { title: "Garden-path sentence", url: "https://en.wikipedia.org/wiki/Garden-path_sentence", source: "Wikipedia" },
  ],
  "Discourse_Processing": [
    { title: "Discourse analysis", url: "https://en.wikipedia.org/wiki/Discourse_analysis", source: "Wikipedia" },
    { title: "Discourse processing research", url: "https://scholar.google.com/scholar?q=discourse+processing+text+comprehension+cognitive", source: "Google Scholar" },
    { title: "Discourse comprehension", url: "https://scholar.google.com/scholar?q=Kintsch+van+Dijk+discourse+comprehension+model", source: "Google Scholar" },
  ],
  "Language_Acquisition": [
    { title: "Language acquisition", url: "https://en.wikipedia.org/wiki/Language_acquisition", source: "Wikipedia" },
    { title: "Language acquisition research", url: "https://scholar.google.com/scholar?q=language+acquisition+child+development+cognitive", source: "Google Scholar" },
    { title: "Language acquisition", url: "https://dictionary.apa.org/language-acquisition", source: "APA Dictionary" },
  ],
  "Bilingualism": [
    { title: "Bilingualism", url: "https://en.wikipedia.org/wiki/Bilingualism", source: "Wikipedia" },
    { title: "Bilingualism research", url: "https://scholar.google.com/scholar?q=bilingualism+cognitive+advantages+language+processing", source: "Google Scholar" },
    { title: "Bilingualism", url: "https://dictionary.apa.org/bilingualism", source: "APA Dictionary" },
  ],
  "Critical_Period_Hypothesis": [
    { title: "Critical period hypothesis", url: "https://en.wikipedia.org/wiki/Critical_period_hypothesis", source: "Wikipedia" },
    { title: "Critical period hypothesis research", url: "https://scholar.google.com/scholar?q=critical+period+hypothesis+language+acquisition+Lenneberg", source: "Google Scholar" },
    { title: "Critical period", url: "https://dictionary.apa.org/critical-period", source: "APA Dictionary" },
  ],
  "Universal_Grammar": [
    { title: "Universal grammar", url: "https://en.wikipedia.org/wiki/Universal_grammar", source: "Wikipedia" },
    { title: "Universal grammar (Chomsky)", url: "https://scholar.google.com/scholar?q=Chomsky+universal+grammar+innate+language", source: "Google Scholar" },
    { title: "Innateness and Language", url: "https://plato.stanford.edu/entries/innateness-language/", source: "Stanford Encyclopedia" },
  ],
  "Linguistic_Relativity": [
    { title: "Linguistic relativity", url: "https://en.wikipedia.org/wiki/Linguistic_relativity", source: "Wikipedia" },
    { title: "Linguistic relativity research", url: "https://scholar.google.com/scholar?q=linguistic+relativity+Sapir+Whorf+hypothesis", source: "Google Scholar" },
    { title: "Linguistic determinism", url: "https://dictionary.apa.org/linguistic-determinism", source: "APA Dictionary" },
  ],
  "Language_and_Cognition": [
    { title: "Language and thought", url: "https://en.wikipedia.org/wiki/Language_and_thought", source: "Wikipedia" },
    { title: "Language and cognition research", url: "https://scholar.google.com/scholar?q=language+and+cognition+thinking+for+speaking", source: "Google Scholar" },
    { title: "Language of Thought Hypothesis", url: "https://plato.stanford.edu/entries/language-thought/", source: "Stanford Encyclopedia" },
  ],
  "Reading_and_Dyslexia": [
    { title: "Dyslexia", url: "https://en.wikipedia.org/wiki/Dyslexia", source: "Wikipedia" },
    { title: "Reading and dyslexia research", url: "https://scholar.google.com/scholar?q=reading+dyslexia+phonological+deficit+cognitive", source: "Google Scholar" },
    { title: "Dyslexia", url: "https://dictionary.apa.org/dyslexia", source: "APA Dictionary" },
    { title: "Reading (process)", url: "https://en.wikipedia.org/wiki/Reading_(process)", source: "Wikipedia" },
  ],
  "Aphasia": [
    { title: "Aphasia", url: "https://en.wikipedia.org/wiki/Aphasia", source: "Wikipedia" },
    { title: "Aphasia research", url: "https://scholar.google.com/scholar?q=aphasia+Broca+Wernicke+language+disorder", source: "Google Scholar" },
    { title: "Aphasia", url: "https://dictionary.apa.org/aphasia", source: "APA Dictionary" },
  ],

  // ═══════════════════════════════════════════════════════════
  // THINKING
  // ═══════════════════════════════════════════════════════════
  "Deductive_Reasoning": [
    { title: "Deductive reasoning", url: "https://en.wikipedia.org/wiki/Deductive_reasoning", source: "Wikipedia" },
    { title: "Deductive reasoning research", url: "https://scholar.google.com/scholar?q=deductive+reasoning+syllogisms+cognitive+psychology", source: "Google Scholar" },
    { title: "Deductive reasoning", url: "https://dictionary.apa.org/deductive-reasoning", source: "APA Dictionary" },
  ],
  "Inductive_Reasoning": [
    { title: "Inductive reasoning", url: "https://en.wikipedia.org/wiki/Inductive_reasoning", source: "Wikipedia" },
    { title: "Inductive reasoning research", url: "https://scholar.google.com/scholar?q=inductive+reasoning+generalization+cognitive", source: "Google Scholar" },
    { title: "Inductive reasoning", url: "https://dictionary.apa.org/inductive-reasoning", source: "APA Dictionary" },
  ],
  "Analogical_Reasoning": [
    { title: "Analogy", url: "https://en.wikipedia.org/wiki/Analogy", source: "Wikipedia" },
    { title: "Analogical reasoning research", url: "https://scholar.google.com/scholar?q=analogical+reasoning+Gentner+structure+mapping", source: "Google Scholar" },
    { title: "Analogical reasoning", url: "https://dictionary.apa.org/analogical-reasoning", source: "APA Dictionary" },
  ],
  "Causal_Reasoning": [
    { title: "Causal reasoning", url: "https://en.wikipedia.org/wiki/Causal_reasoning", source: "Wikipedia" },
    { title: "Causal reasoning research", url: "https://scholar.google.com/scholar?q=causal+reasoning+cognitive+psychology+causal+models", source: "Google Scholar" },
    { title: "Causation", url: "https://plato.stanford.edu/entries/causation-probabilistic/", source: "Stanford Encyclopedia" },
  ],
  "Conditional_Reasoning": [
    { title: "Conditional reasoning", url: "https://en.wikipedia.org/wiki/Conditional_reasoning", source: "Wikipedia" },
    { title: "Conditional reasoning research", url: "https://scholar.google.com/scholar?q=conditional+reasoning+Wason+selection+task", source: "Google Scholar" },
    { title: "Wason selection task", url: "https://en.wikipedia.org/wiki/Wason_selection_task", source: "Wikipedia" },
  ],
  "Problem_Solving": [
    { title: "Problem solving", url: "https://en.wikipedia.org/wiki/Problem_solving", source: "Wikipedia" },
    { title: "Problem solving research", url: "https://scholar.google.com/scholar?q=problem+solving+cognitive+psychology+Newell+Simon", source: "Google Scholar" },
    { title: "Problem solving", url: "https://dictionary.apa.org/problem-solving", source: "APA Dictionary" },
  ],
  "Means_End_Analysis": [
    { title: "Means–ends analysis", url: "https://en.wikipedia.org/wiki/Means%E2%80%93ends_analysis", source: "Wikipedia" },
    { title: "Means-end analysis (Newell & Simon)", url: "https://scholar.google.com/scholar?q=Newell+Simon+means+ends+analysis+GPS", source: "Google Scholar" },
    { title: "Means-end analysis", url: "https://dictionary.apa.org/means-ends-analysis", source: "APA Dictionary" },
  ],
  "Mental_Set": [
    { title: "Mental set", url: "https://en.wikipedia.org/wiki/Mental_set", source: "Wikipedia" },
    { title: "Mental set research", url: "https://scholar.google.com/scholar?q=mental+set+Einstellung+effect+problem+solving", source: "Google Scholar" },
    { title: "Mental set", url: "https://dictionary.apa.org/mental-set", source: "APA Dictionary" },
  ],
  "Functional_Fixedness": [
    { title: "Functional fixedness", url: "https://en.wikipedia.org/wiki/Functional_fixedness", source: "Wikipedia" },
    { title: "Functional fixedness research", url: "https://scholar.google.com/scholar?q=functional+fixedness+Duncker+candle+problem", source: "Google Scholar" },
    { title: "Functional fixedness", url: "https://dictionary.apa.org/functional-fixedness", source: "APA Dictionary" },
  ],
  "Incubation_Effect": [
    { title: "Incubation (psychology)", url: "https://en.wikipedia.org/wiki/Incubation_(psychology)", source: "Wikipedia" },
    { title: "Incubation effect research", url: "https://scholar.google.com/scholar?q=incubation+effect+creativity+problem+solving", source: "Google Scholar" },
    { title: "Incubation", url: "https://dictionary.apa.org/incubation", source: "APA Dictionary" },
  ],
  "Decision_Making": [
    { title: "Decision-making", url: "https://en.wikipedia.org/wiki/Decision-making", source: "Wikipedia" },
    { title: "Decision making research", url: "https://scholar.google.com/scholar?q=decision+making+cognitive+psychology+judgment", source: "Google Scholar" },
    { title: "Decision making", url: "https://dictionary.apa.org/decision-making", source: "APA Dictionary" },
  ],
  "Prospect_Theory": [
    { title: "Prospect theory", url: "https://en.wikipedia.org/wiki/Prospect_theory", source: "Wikipedia" },
    { title: "Prospect theory (Kahneman & Tversky, 1979)", url: "https://scholar.google.com/scholar?q=Kahneman+Tversky+prospect+theory+1979", source: "Google Scholar" },
    { title: "Prospect theory", url: "https://dictionary.apa.org/prospect-theory", source: "APA Dictionary" },
  ],
  "Bounded_Rationality": [
    { title: "Bounded rationality", url: "https://en.wikipedia.org/wiki/Bounded_rationality", source: "Wikipedia" },
    { title: "Bounded rationality (Simon)", url: "https://scholar.google.com/scholar?q=Simon+bounded+rationality+satisficing", source: "Google Scholar" },
    { title: "Bounded rationality", url: "https://plato.stanford.edu/entries/bounded-rationality/", source: "Stanford Encyclopedia" },
  ],
  "Expected_Utility_Theory": [
    { title: "Expected utility hypothesis", url: "https://en.wikipedia.org/wiki/Expected_utility_hypothesis", source: "Wikipedia" },
    { title: "Expected utility theory research", url: "https://scholar.google.com/scholar?q=expected+utility+theory+decision+making+von+Neumann", source: "Google Scholar" },
    { title: "Expected utility theory", url: "https://plato.stanford.edu/entries/rationality-normative-utility/", source: "Stanford Encyclopedia" },
  ],
  "Framing_Effects": [
    { title: "Framing effect (psychology)", url: "https://en.wikipedia.org/wiki/Framing_effect_(psychology)", source: "Wikipedia" },
    { title: "Framing effects research", url: "https://scholar.google.com/scholar?q=framing+effects+Tversky+Kahneman+decision+making", source: "Google Scholar" },
    { title: "Framing effect", url: "https://dictionary.apa.org/framing-effect", source: "APA Dictionary" },
  ],
  "Availability_Heuristic": [
    { title: "Availability heuristic", url: "https://en.wikipedia.org/wiki/Availability_heuristic", source: "Wikipedia" },
    { title: "Availability heuristic (Tversky & Kahneman)", url: "https://scholar.google.com/scholar?q=Tversky+Kahneman+availability+heuristic+1973", source: "Google Scholar" },
    { title: "Availability heuristic", url: "https://dictionary.apa.org/availability-heuristic", source: "APA Dictionary" },
  ],
  "Representativeness_Heuristic": [
    { title: "Representativeness heuristic", url: "https://en.wikipedia.org/wiki/Representativeness_heuristic", source: "Wikipedia" },
    { title: "Representativeness heuristic research", url: "https://scholar.google.com/scholar?q=representativeness+heuristic+Tversky+Kahneman", source: "Google Scholar" },
    { title: "Representativeness heuristic", url: "https://dictionary.apa.org/representativeness-heuristic", source: "APA Dictionary" },
  ],
  "Anchoring_Bias": [
    { title: "Anchoring (cognitive bias)", url: "https://en.wikipedia.org/wiki/Anchoring_(cognitive_bias)", source: "Wikipedia" },
    { title: "Anchoring bias research", url: "https://scholar.google.com/scholar?q=anchoring+bias+Tversky+Kahneman+adjustment", source: "Google Scholar" },
    { title: "Anchoring bias", url: "https://dictionary.apa.org/anchoring-bias", source: "APA Dictionary" },
  ],
  "Confirmation_Bias": [
    { title: "Confirmation bias", url: "https://en.wikipedia.org/wiki/Confirmation_bias", source: "Wikipedia" },
    { title: "Confirmation bias research", url: "https://scholar.google.com/scholar?q=confirmation+bias+hypothesis+testing+reasoning", source: "Google Scholar" },
    { title: "Confirmation bias", url: "https://dictionary.apa.org/confirmation-bias", source: "APA Dictionary" },
  ],
  "Overconfidence_Effect": [
    { title: "Overconfidence effect", url: "https://en.wikipedia.org/wiki/Overconfidence_effect", source: "Wikipedia" },
    { title: "Overconfidence effect research", url: "https://scholar.google.com/scholar?q=overconfidence+effect+calibration+judgment", source: "Google Scholar" },
    { title: "Overconfidence", url: "https://dictionary.apa.org/overconfidence", source: "APA Dictionary" },
  ],
  "Dunning_Kruger_Effect": [
    { title: "Dunning–Kruger effect", url: "https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect", source: "Wikipedia" },
    { title: "Dunning-Kruger effect research", url: "https://scholar.google.com/scholar?q=Dunning+Kruger+effect+metacognition+incompetence", source: "Google Scholar" },
    { title: "Unskilled and Unaware (Kruger & Dunning, 1999)", url: "https://scholar.google.com/scholar?q=Kruger+Dunning+%22unskilled+and+unaware%22+1999", source: "Google Scholar" },
  ],
  "Creativity": [
    { title: "Creativity", url: "https://en.wikipedia.org/wiki/Creativity", source: "Wikipedia" },
    { title: "Creativity research", url: "https://scholar.google.com/scholar?q=creativity+cognitive+psychology+divergent+thinking", source: "Google Scholar" },
    { title: "Creativity", url: "https://dictionary.apa.org/creativity", source: "APA Dictionary" },
  ],
  "Divergent_Thinking": [
    { title: "Divergent thinking", url: "https://en.wikipedia.org/wiki/Divergent_thinking", source: "Wikipedia" },
    { title: "Divergent thinking research", url: "https://scholar.google.com/scholar?q=divergent+thinking+Guilford+creativity+fluency", source: "Google Scholar" },
    { title: "Divergent thinking", url: "https://dictionary.apa.org/divergent-thinking", source: "APA Dictionary" },
  ],
  "Mental_Models": [
    { title: "Mental model", url: "https://en.wikipedia.org/wiki/Mental_model", source: "Wikipedia" },
    { title: "Mental models (Johnson-Laird)", url: "https://scholar.google.com/scholar?q=Johnson-Laird+mental+models+reasoning", source: "Google Scholar" },
    { title: "Mental model", url: "https://dictionary.apa.org/mental-model", source: "APA Dictionary" },
  ],
  "Dual_Process_Theory": [
    { title: "Dual process theory", url: "https://en.wikipedia.org/wiki/Dual_process_theory", source: "Wikipedia" },
    { title: "Dual process theory research", url: "https://scholar.google.com/scholar?q=dual+process+theory+System+1+System+2+Kahneman", source: "Google Scholar" },
    { title: "Dual-process theories", url: "https://dictionary.apa.org/dual-process-theories-of-reasoning", source: "APA Dictionary" },
    { title: "Dual-Process Theories", url: "https://plato.stanford.edu/entries/dual-process-theories/", source: "Stanford Encyclopedia" },
  ],
  "Metacognition": [
    { title: "Metacognition", url: "https://en.wikipedia.org/wiki/Metacognition", source: "Wikipedia" },
    { title: "Metacognition research", url: "https://scholar.google.com/scholar?q=metacognition+Flavell+thinking+about+thinking", source: "Google Scholar" },
    { title: "Metacognition", url: "https://dictionary.apa.org/metacognition", source: "APA Dictionary" },
  ],

  // ═══════════════════════════════════════════════════════════
  // DEVELOPMENT
  // ═══════════════════════════════════════════════════════════
  "Piagets_Theory": [
    { title: "Piaget's theory of cognitive development", url: "https://en.wikipedia.org/wiki/Piaget%27s_theory_of_cognitive_development", source: "Wikipedia" },
    { title: "Piaget's theory research", url: "https://scholar.google.com/scholar?q=Piaget+cognitive+development+stages+theory", source: "Google Scholar" },
    { title: "Piaget's theory", url: "https://dictionary.apa.org/piagetian-theory", source: "APA Dictionary" },
  ],
  "Vygotskys_Theory": [
    { title: "Zone of proximal development", url: "https://en.wikipedia.org/wiki/Zone_of_proximal_development", source: "Wikipedia" },
    { title: "Vygotsky's theory research", url: "https://scholar.google.com/scholar?q=Vygotsky+zone+proximal+development+scaffolding", source: "Google Scholar" },
    { title: "Vygotsky's theory", url: "https://dictionary.apa.org/zone-of-proximal-development", source: "APA Dictionary" },
    { title: "Lev Vygotsky", url: "https://en.wikipedia.org/wiki/Lev_Vygotsky", source: "Wikipedia" },
  ],
  "Information_Processing_Development": [
    { title: "Information processing theory", url: "https://en.wikipedia.org/wiki/Information_processing_theory", source: "Wikipedia" },
    { title: "Information processing development research", url: "https://scholar.google.com/scholar?q=information+processing+development+children+cognitive", source: "Google Scholar" },
    { title: "Information processing theory", url: "https://dictionary.apa.org/information-processing-theory", source: "APA Dictionary" },
  ],
  "Theory_of_Mind": [
    { title: "Theory of mind", url: "https://en.wikipedia.org/wiki/Theory_of_mind", source: "Wikipedia" },
    { title: "Theory of mind research", url: "https://scholar.google.com/scholar?q=theory+of+mind+false+belief+cognitive+development", source: "Google Scholar" },
    { title: "Theory of mind", url: "https://dictionary.apa.org/theory-of-mind", source: "APA Dictionary" },
    { title: "Folk Psychology as a Theory", url: "https://plato.stanford.edu/entries/folkpsych-theory/", source: "Stanford Encyclopedia" },
  ],
  "Core_Knowledge_Theory": [
    { title: "Core knowledge", url: "https://en.wikipedia.org/wiki/Core_knowledge", source: "Wikipedia" },
    { title: "Core knowledge theory (Spelke)", url: "https://scholar.google.com/scholar?q=Spelke+core+knowledge+infant+cognition", source: "Google Scholar" },
    { title: "Core Knowledge and Conceptual Change (Spelke & Kinzler)", url: "https://scholar.google.com/scholar?q=Spelke+Kinzler+core+knowledge+conceptual+change", source: "Google Scholar" },
  ],
  "Object_Permanence": [
    { title: "Object permanence", url: "https://en.wikipedia.org/wiki/Object_permanence", source: "Wikipedia" },
    { title: "Object permanence research", url: "https://scholar.google.com/scholar?q=object+permanence+Piaget+infant+cognitive+development", source: "Google Scholar" },
    { title: "Object permanence", url: "https://dictionary.apa.org/object-permanence", source: "APA Dictionary" },
  ],
  "Infant_Perception": [
    { title: "Infant cognitive development", url: "https://en.wikipedia.org/wiki/Infant_cognitive_development", source: "Wikipedia" },
    { title: "Infant perception research", url: "https://scholar.google.com/scholar?q=infant+perception+visual+auditory+development", source: "Google Scholar" },
    { title: "Infant perception and cognition", url: "https://scholar.google.com/scholar?q=infant+perception+preferential+looking+habituation", source: "Google Scholar" },
  ],
  "Joint_Attention": [
    { title: "Joint attention", url: "https://en.wikipedia.org/wiki/Joint_attention", source: "Wikipedia" },
    { title: "Joint attention research", url: "https://scholar.google.com/scholar?q=joint+attention+social+cognition+development", source: "Google Scholar" },
    { title: "Joint attention", url: "https://dictionary.apa.org/joint-attention", source: "APA Dictionary" },
  ],
  "Preferential_Looking": [
    { title: "Preferential looking", url: "https://en.wikipedia.org/wiki/Preferential_looking", source: "Wikipedia" },
    { title: "Preferential looking research", url: "https://scholar.google.com/scholar?q=preferential+looking+Fantz+infant+perception+method", source: "Google Scholar" },
    { title: "Visual preference method (Fantz)", url: "https://scholar.google.com/scholar?q=Fantz+visual+preference+method+infant+perception", source: "Google Scholar" },
  ],
  "Executive_Function_Development": [
    { title: "Executive functions", url: "https://en.wikipedia.org/wiki/Executive_functions", source: "Wikipedia" },
    { title: "Executive function development research", url: "https://scholar.google.com/scholar?q=executive+function+development+children+prefrontal", source: "Google Scholar" },
    { title: "Executive function", url: "https://dictionary.apa.org/executive-functions", source: "APA Dictionary" },
  ],
  "Adolescent_Brain_Development": [
    { title: "Adolescent brain development", url: "https://en.wikipedia.org/wiki/Adolescence#Brain_development", source: "Wikipedia" },
    { title: "Adolescent brain development research", url: "https://scholar.google.com/scholar?q=adolescent+brain+development+prefrontal+cortex+maturation", source: "Google Scholar" },
    { title: "Adolescent cognitive development", url: "https://dictionary.apa.org/adolescence", source: "APA Dictionary" },
  ],
  "Cognitive_Aging": [
    { title: "Cognitive aging", url: "https://en.wikipedia.org/wiki/Cognitive_aging", source: "Wikipedia" },
    { title: "Cognitive aging research", url: "https://scholar.google.com/scholar?q=cognitive+aging+decline+processing+speed+memory", source: "Google Scholar" },
    { title: "Cognitive aging", url: "https://dictionary.apa.org/cognitive-aging", source: "APA Dictionary" },
  ],
  "Cognitive_Reserve": [
    { title: "Cognitive reserve", url: "https://en.wikipedia.org/wiki/Cognitive_reserve", source: "Wikipedia" },
    { title: "Cognitive reserve (Stern)", url: "https://scholar.google.com/scholar?q=Stern+cognitive+reserve+brain+resilience", source: "Google Scholar" },
    { title: "Cognitive reserve", url: "https://dictionary.apa.org/cognitive-reserve", source: "APA Dictionary" },
  ],
  "Wisdom_and_Cognition": [
    { title: "Wisdom", url: "https://en.wikipedia.org/wiki/Wisdom", source: "Wikipedia" },
    { title: "Wisdom and cognition research", url: "https://scholar.google.com/scholar?q=wisdom+cognition+Baltes+Berlin+wisdom+paradigm", source: "Google Scholar" },
    { title: "Wisdom", url: "https://dictionary.apa.org/wisdom", source: "APA Dictionary" },
  ],
  "Autism_Spectrum_Disorder": [
    { title: "Autism spectrum", url: "https://en.wikipedia.org/wiki/Autism_spectrum", source: "Wikipedia" },
    { title: "Autism spectrum disorder research", url: "https://scholar.google.com/scholar?q=autism+spectrum+disorder+cognitive+profile+theory+of+mind", source: "Google Scholar" },
    { title: "Autism spectrum disorder", url: "https://dictionary.apa.org/autism-spectrum-disorder", source: "APA Dictionary" },
  ],
  "ADHD": [
    { title: "Attention deficit hyperactivity disorder", url: "https://en.wikipedia.org/wiki/Attention_deficit_hyperactivity_disorder", source: "Wikipedia" },
    { title: "ADHD research", url: "https://scholar.google.com/scholar?q=ADHD+attention+deficit+executive+function+cognitive", source: "Google Scholar" },
    { title: "Attention-deficit/hyperactivity disorder", url: "https://dictionary.apa.org/attention-deficit-hyperactivity-disorder", source: "APA Dictionary" },
  ],
  "Intellectual_Disability": [
    { title: "Intellectual disability", url: "https://en.wikipedia.org/wiki/Intellectual_disability", source: "Wikipedia" },
    { title: "Intellectual disability research", url: "https://scholar.google.com/scholar?q=intellectual+disability+cognitive+development+psychology", source: "Google Scholar" },
    { title: "Intellectual disability", url: "https://dictionary.apa.org/intellectual-disability", source: "APA Dictionary" },
  ],
  "Developmental_Dyslexia": [
    { title: "Developmental dyslexia", url: "https://en.wikipedia.org/wiki/Dyslexia", source: "Wikipedia" },
    { title: "Developmental dyslexia research", url: "https://scholar.google.com/scholar?q=developmental+dyslexia+phonological+deficit+reading", source: "Google Scholar" },
    { title: "Dyslexia", url: "https://dictionary.apa.org/dyslexia", source: "APA Dictionary" },
  ],

  // ═══════════════════════════════════════════════════════════
  // NEUROSCIENCE
  // ═══════════════════════════════════════════════════════════
  "Cerebral_Cortex": [
    { title: "Cerebral cortex", url: "https://en.wikipedia.org/wiki/Cerebral_cortex", source: "Wikipedia" },
    { title: "Cerebral cortex research", url: "https://scholar.google.com/scholar?q=cerebral+cortex+organization+function+cognition", source: "Google Scholar" },
    { title: "Cerebral cortex", url: "https://dictionary.apa.org/cerebral-cortex", source: "APA Dictionary" },
  ],
  "Prefrontal_Cortex": [
    { title: "Prefrontal cortex", url: "https://en.wikipedia.org/wiki/Prefrontal_cortex", source: "Wikipedia" },
    { title: "Prefrontal cortex research", url: "https://scholar.google.com/scholar?q=prefrontal+cortex+executive+function+cognition", source: "Google Scholar" },
    { title: "Prefrontal cortex", url: "https://dictionary.apa.org/prefrontal-cortex", source: "APA Dictionary" },
  ],
  "Hippocampus": [
    { title: "Hippocampus", url: "https://en.wikipedia.org/wiki/Hippocampus", source: "Wikipedia" },
    { title: "Hippocampus research", url: "https://scholar.google.com/scholar?q=hippocampus+memory+formation+spatial+cognition", source: "Google Scholar" },
    { title: "Hippocampus", url: "https://dictionary.apa.org/hippocampus", source: "APA Dictionary" },
  ],
  "Amygdala": [
    { title: "Amygdala", url: "https://en.wikipedia.org/wiki/Amygdala", source: "Wikipedia" },
    { title: "Amygdala research", url: "https://scholar.google.com/scholar?q=amygdala+emotion+fear+conditioning+cognition", source: "Google Scholar" },
    { title: "Amygdala", url: "https://dictionary.apa.org/amygdala", source: "APA Dictionary" },
  ],
  "Basal_Ganglia": [
    { title: "Basal ganglia", url: "https://en.wikipedia.org/wiki/Basal_ganglia", source: "Wikipedia" },
    { title: "Basal ganglia research", url: "https://scholar.google.com/scholar?q=basal+ganglia+motor+control+learning+cognition", source: "Google Scholar" },
    { title: "Basal ganglia", url: "https://dictionary.apa.org/basal-ganglia", source: "APA Dictionary" },
  ],
  "Cerebellum": [
    { title: "Cerebellum", url: "https://en.wikipedia.org/wiki/Cerebellum", source: "Wikipedia" },
    { title: "Cerebellum research", url: "https://scholar.google.com/scholar?q=cerebellum+cognition+motor+learning+timing", source: "Google Scholar" },
    { title: "Cerebellum", url: "https://dictionary.apa.org/cerebellum", source: "APA Dictionary" },
  ],
  "Functional_MRI": [
    { title: "Functional magnetic resonance imaging", url: "https://en.wikipedia.org/wiki/Functional_magnetic_resonance_imaging", source: "Wikipedia" },
    { title: "fMRI research", url: "https://scholar.google.com/scholar?q=functional+MRI+cognitive+neuroscience+BOLD", source: "Google Scholar" },
    { title: "Functional MRI", url: "https://dictionary.apa.org/functional-magnetic-resonance-imaging", source: "APA Dictionary" },
  ],
  "Electroencephalography": [
    { title: "Electroencephalography", url: "https://en.wikipedia.org/wiki/Electroencephalography", source: "Wikipedia" },
    { title: "EEG research", url: "https://scholar.google.com/scholar?q=electroencephalography+EEG+cognitive+neuroscience", source: "Google Scholar" },
    { title: "Electroencephalography", url: "https://dictionary.apa.org/electroencephalography", source: "APA Dictionary" },
  ],
  "Event_Related_Potentials": [
    { title: "Event-related potential", url: "https://en.wikipedia.org/wiki/Event-related_potential", source: "Wikipedia" },
    { title: "Event-related potentials research", url: "https://scholar.google.com/scholar?q=event+related+potentials+ERP+cognitive+neuroscience", source: "Google Scholar" },
    { title: "Event-related potential", url: "https://dictionary.apa.org/event-related-potential", source: "APA Dictionary" },
  ],
  "Transcranial_Magnetic_Stimulation": [
    { title: "Transcranial magnetic stimulation", url: "https://en.wikipedia.org/wiki/Transcranial_magnetic_stimulation", source: "Wikipedia" },
    { title: "TMS research", url: "https://scholar.google.com/scholar?q=transcranial+magnetic+stimulation+TMS+cognition", source: "Google Scholar" },
    { title: "Transcranial magnetic stimulation", url: "https://dictionary.apa.org/transcranial-magnetic-stimulation", source: "APA Dictionary" },
  ],
  "PET_Scanning": [
    { title: "Positron emission tomography", url: "https://en.wikipedia.org/wiki/Positron_emission_tomography", source: "Wikipedia" },
    { title: "PET scanning research", url: "https://scholar.google.com/scholar?q=PET+scanning+brain+imaging+cognitive+neuroscience", source: "Google Scholar" },
    { title: "Positron emission tomography", url: "https://dictionary.apa.org/positron-emission-tomography", source: "APA Dictionary" },
  ],
  "Neural_Plasticity": [
    { title: "Neuroplasticity", url: "https://en.wikipedia.org/wiki/Neuroplasticity", source: "Wikipedia" },
    { title: "Neural plasticity research", url: "https://scholar.google.com/scholar?q=neural+plasticity+brain+experience+dependent", source: "Google Scholar" },
    { title: "Neuroplasticity", url: "https://dictionary.apa.org/neuroplasticity", source: "APA Dictionary" },
  ],
  "Lateralization": [
    { title: "Lateralization of brain function", url: "https://en.wikipedia.org/wiki/Lateralization_of_brain_function", source: "Wikipedia" },
    { title: "Lateralization research", url: "https://scholar.google.com/scholar?q=brain+lateralization+hemispheric+specialization", source: "Google Scholar" },
    { title: "Lateralization", url: "https://dictionary.apa.org/lateralization", source: "APA Dictionary" },
  ],
  "Mirror_Neurons": [
    { title: "Mirror neuron", url: "https://en.wikipedia.org/wiki/Mirror_neuron", source: "Wikipedia" },
    { title: "Mirror neurons research", url: "https://scholar.google.com/scholar?q=mirror+neurons+Rizzolatti+action+observation", source: "Google Scholar" },
    { title: "Mirror neuron", url: "https://dictionary.apa.org/mirror-neuron", source: "APA Dictionary" },
  ],
  "Long_Term_Potentiation": [
    { title: "Long-term potentiation", url: "https://en.wikipedia.org/wiki/Long-term_potentiation", source: "Wikipedia" },
    { title: "Long-term potentiation research", url: "https://scholar.google.com/scholar?q=long+term+potentiation+LTP+synaptic+plasticity+memory", source: "Google Scholar" },
    { title: "Long-term potentiation", url: "https://dictionary.apa.org/long-term-potentiation", source: "APA Dictionary" },
  ],
  "Neurotransmitters_and_Cognition": [
    { title: "Neurotransmitter", url: "https://en.wikipedia.org/wiki/Neurotransmitter", source: "Wikipedia" },
    { title: "Neurotransmitters and cognition research", url: "https://scholar.google.com/scholar?q=neurotransmitters+cognition+dopamine+serotonin+acetylcholine", source: "Google Scholar" },
    { title: "Neurotransmitter", url: "https://dictionary.apa.org/neurotransmitter", source: "APA Dictionary" },
  ],
  "Neural_Correlates_of_Consciousness": [
    { title: "Neural correlates of consciousness", url: "https://en.wikipedia.org/wiki/Neural_correlates_of_consciousness", source: "Wikipedia" },
    { title: "Neural correlates of consciousness research", url: "https://scholar.google.com/scholar?q=neural+correlates+consciousness+NCC+Crick+Koch", source: "Google Scholar" },
    { title: "Consciousness", url: "https://plato.stanford.edu/entries/consciousness-neuroscience/", source: "Stanford Encyclopedia" },
  ],
  "Default_Mode_Network": [
    { title: "Default mode network", url: "https://en.wikipedia.org/wiki/Default_mode_network", source: "Wikipedia" },
    { title: "Default mode network research", url: "https://scholar.google.com/scholar?q=default+mode+network+Raichle+resting+state", source: "Google Scholar" },
    { title: "A default mode of brain function (Raichle et al., 2001)", url: "https://scholar.google.com/scholar?q=Raichle+%22default+mode+of+brain+function%22+2001", source: "Google Scholar" },
  ],
  "Connectomics": [
    { title: "Connectomics", url: "https://en.wikipedia.org/wiki/Connectomics", source: "Wikipedia" },
    { title: "Connectomics research", url: "https://scholar.google.com/scholar?q=connectomics+brain+connectivity+network+neuroscience", source: "Google Scholar" },
    { title: "Connectome", url: "https://en.wikipedia.org/wiki/Connectome", source: "Wikipedia" },
  ],
  "Brain_Computer_Interfaces": [
    { title: "Brain–computer interface", url: "https://en.wikipedia.org/wiki/Brain%E2%80%93computer_interface", source: "Wikipedia" },
    { title: "Brain-computer interfaces research", url: "https://scholar.google.com/scholar?q=brain+computer+interface+BCI+neural+engineering", source: "Google Scholar" },
    { title: "Brain-computer interface", url: "https://dictionary.apa.org/brain-computer-interface", source: "APA Dictionary" },
  ],

  // ═══════════════════════════════════════════════════════════
  // APPLICATIONS
  // ═══════════════════════════════════════════════════════════
  "Cognitive_Load_Theory": [
    { title: "Cognitive load", url: "https://en.wikipedia.org/wiki/Cognitive_load", source: "Wikipedia" },
    { title: "Cognitive load theory (Sweller)", url: "https://scholar.google.com/scholar?q=Sweller+cognitive+load+theory+instructional+design", source: "Google Scholar" },
    { title: "Cognitive load theory", url: "https://dictionary.apa.org/cognitive-load-theory", source: "APA Dictionary" },
  ],
  "Testing_Effect": [
    { title: "Testing effect", url: "https://en.wikipedia.org/wiki/Testing_effect", source: "Wikipedia" },
    { title: "Testing effect research", url: "https://scholar.google.com/scholar?q=testing+effect+retrieval+practice+Roediger+Karpicke", source: "Google Scholar" },
    { title: "Test-enhanced learning (Roediger & Karpicke, 2006)", url: "https://scholar.google.com/scholar?q=Roediger+Karpicke+%22test+enhanced+learning%22+2006", source: "Google Scholar" },
  ],
  "Multimedia_Learning": [
    { title: "Multimedia learning", url: "https://en.wikipedia.org/wiki/Multimedia_learning", source: "Wikipedia" },
    { title: "Multimedia learning (Mayer)", url: "https://scholar.google.com/scholar?q=Mayer+multimedia+learning+cognitive+theory", source: "Google Scholar" },
    { title: "Cognitive theory of multimedia learning", url: "https://scholar.google.com/scholar?q=Mayer+cognitive+theory+multimedia+learning+principles", source: "Google Scholar" },
  ],
  "Self_Regulated_Learning": [
    { title: "Self-regulated learning", url: "https://en.wikipedia.org/wiki/Self-regulated_learning", source: "Wikipedia" },
    { title: "Self-regulated learning research", url: "https://scholar.google.com/scholar?q=self+regulated+learning+Zimmerman+metacognition", source: "Google Scholar" },
    { title: "Self-regulation", url: "https://dictionary.apa.org/self-regulation", source: "APA Dictionary" },
  ],
  "Growth_Mindset": [
    { title: "Mindset — Growth and fixed mindsets", url: "https://en.wikipedia.org/wiki/Mindset#Fixed_and_growth_mindset", source: "Wikipedia" },
    { title: "Growth mindset (Dweck)", url: "https://scholar.google.com/scholar?q=Dweck+growth+mindset+implicit+theories+intelligence", source: "Google Scholar" },
    { title: "Growth mindset", url: "https://dictionary.apa.org/growth-mindset", source: "APA Dictionary" },
  ],
  "Cognitive_Behavioral_Therapy": [
    { title: "Cognitive behavioral therapy", url: "https://en.wikipedia.org/wiki/Cognitive_behavioral_therapy", source: "Wikipedia" },
    { title: "CBT research", url: "https://scholar.google.com/scholar?q=cognitive+behavioral+therapy+CBT+Beck+efficacy", source: "Google Scholar" },
    { title: "Cognitive behavioral therapy", url: "https://dictionary.apa.org/cognitive-behavior-therapy", source: "APA Dictionary" },
  ],
  "Cognitive_Distortions": [
    { title: "Cognitive distortion", url: "https://en.wikipedia.org/wiki/Cognitive_distortion", source: "Wikipedia" },
    { title: "Cognitive distortions research", url: "https://scholar.google.com/scholar?q=cognitive+distortions+Beck+automatic+thoughts", source: "Google Scholar" },
    { title: "Cognitive distortion", url: "https://dictionary.apa.org/cognitive-distortion", source: "APA Dictionary" },
  ],
  "Alzheimers_Disease": [
    { title: "Alzheimer's disease", url: "https://en.wikipedia.org/wiki/Alzheimer%27s_disease", source: "Wikipedia" },
    { title: "Alzheimer's disease cognitive research", url: "https://scholar.google.com/scholar?q=Alzheimer+disease+cognitive+decline+memory+impairment", source: "Google Scholar" },
    { title: "Alzheimer's disease", url: "https://dictionary.apa.org/alzheimer-disease", source: "APA Dictionary" },
  ],
  "Traumatic_Brain_Injury": [
    { title: "Traumatic brain injury", url: "https://en.wikipedia.org/wiki/Traumatic_brain_injury", source: "Wikipedia" },
    { title: "Traumatic brain injury research", url: "https://scholar.google.com/scholar?q=traumatic+brain+injury+cognitive+impairment+rehabilitation", source: "Google Scholar" },
    { title: "Traumatic brain injury", url: "https://dictionary.apa.org/traumatic-brain-injury", source: "APA Dictionary" },
  ],
  "PTSD_and_Memory": [
    { title: "Post-traumatic stress disorder", url: "https://en.wikipedia.org/wiki/Post-traumatic_stress_disorder", source: "Wikipedia" },
    { title: "PTSD and memory research", url: "https://scholar.google.com/scholar?q=PTSD+memory+trauma+cognitive+processing+intrusions", source: "Google Scholar" },
    { title: "Post-traumatic stress disorder", url: "https://dictionary.apa.org/posttraumatic-stress-disorder", source: "APA Dictionary" },
  ],
  "Human_Computer_Interaction": [
    { title: "Human–computer interaction", url: "https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction", source: "Wikipedia" },
    { title: "HCI research", url: "https://scholar.google.com/scholar?q=human+computer+interaction+cognitive+psychology+usability", source: "Google Scholar" },
    { title: "Human-computer interaction", url: "https://dictionary.apa.org/human-computer-interaction", source: "APA Dictionary" },
  ],
  "Usability_and_UX": [
    { title: "Usability", url: "https://en.wikipedia.org/wiki/Usability", source: "Wikipedia" },
    { title: "Usability and UX research", url: "https://scholar.google.com/scholar?q=usability+user+experience+cognitive+design+Norman", source: "Google Scholar" },
    { title: "User experience design", url: "https://en.wikipedia.org/wiki/User_experience_design", source: "Wikipedia" },
  ],
  "Driving_and_Distraction": [
    { title: "Distracted driving", url: "https://en.wikipedia.org/wiki/Distracted_driving", source: "Wikipedia" },
    { title: "Driving and distraction research", url: "https://scholar.google.com/scholar?q=driving+distraction+cognitive+load+attention+cell+phone", source: "Google Scholar" },
    { title: "Inattention blindness while driving", url: "https://scholar.google.com/scholar?q=Strayer+Drews+driving+distraction+cell+phone+attention", source: "Google Scholar" },
  ],
  "Aviation_Psychology": [
    { title: "Aviation psychology", url: "https://en.wikipedia.org/wiki/Aviation_psychology", source: "Wikipedia" },
    { title: "Aviation psychology research", url: "https://scholar.google.com/scholar?q=aviation+psychology+human+factors+pilot+cognition", source: "Google Scholar" },
    { title: "Human factors in aviation", url: "https://en.wikipedia.org/wiki/Human_factors_in_aviation", source: "Wikipedia" },
  ],
  "Ergonomics": [
    { title: "Human factors and ergonomics", url: "https://en.wikipedia.org/wiki/Human_factors_and_ergonomics", source: "Wikipedia" },
    { title: "Ergonomics research", url: "https://scholar.google.com/scholar?q=ergonomics+human+factors+cognitive+engineering", source: "Google Scholar" },
    { title: "Ergonomics", url: "https://dictionary.apa.org/ergonomics", source: "APA Dictionary" },
  ],
  "Artificial_Intelligence_and_Cognition": [
    { title: "Artificial intelligence", url: "https://en.wikipedia.org/wiki/Artificial_intelligence", source: "Wikipedia" },
    { title: "AI and cognition research", url: "https://scholar.google.com/scholar?q=artificial+intelligence+cognition+computational+models+mind", source: "Google Scholar" },
    { title: "Artificial Intelligence", url: "https://plato.stanford.edu/entries/artificial-intelligence/", source: "Stanford Encyclopedia" },
  ],
  "Computational_Cognitive_Modeling": [
    { title: "Computational cognition", url: "https://en.wikipedia.org/wiki/Computational_cognition", source: "Wikipedia" },
    { title: "Computational cognitive modeling research", url: "https://scholar.google.com/scholar?q=computational+cognitive+modeling+ACT-R+connectionism", source: "Google Scholar" },
    { title: "Computational Theory of Mind", url: "https://plato.stanford.edu/entries/computational-mind/", source: "Stanford Encyclopedia" },
  ],
  "Embodied_Cognition": [
    { title: "Embodied cognition", url: "https://en.wikipedia.org/wiki/Embodied_cognition", source: "Wikipedia" },
    { title: "Embodied cognition research", url: "https://scholar.google.com/scholar?q=embodied+cognition+grounded+cognition+body+mind", source: "Google Scholar" },
    { title: "Embodied Cognition", url: "https://plato.stanford.edu/entries/embodied-cognition/", source: "Stanford Encyclopedia" },
  ],
  "Cognitive_Architecture": [
    { title: "Cognitive architecture", url: "https://en.wikipedia.org/wiki/Cognitive_architecture", source: "Wikipedia" },
    { title: "Cognitive architecture research", url: "https://scholar.google.com/scholar?q=cognitive+architecture+ACT-R+SOAR+unified+theories", source: "Google Scholar" },
    { title: "Unified Theories of Cognition (Newell)", url: "https://scholar.google.com/scholar?q=Newell+%22Unified+Theories+of+Cognition%22", source: "Google Scholar" },
  ],
  "Forensic_Psychology": [
    { title: "Forensic psychology", url: "https://en.wikipedia.org/wiki/Forensic_psychology", source: "Wikipedia" },
    { title: "Forensic psychology research", url: "https://scholar.google.com/scholar?q=forensic+psychology+cognitive+legal+decision+making", source: "Google Scholar" },
    { title: "Forensic psychology", url: "https://dictionary.apa.org/forensic-psychology", source: "APA Dictionary" },
  ],
  "Eyewitness_Testimony": [
    { title: "Eyewitness testimony", url: "https://en.wikipedia.org/wiki/Eyewitness_testimony", source: "Wikipedia" },
    { title: "Eyewitness testimony research", url: "https://scholar.google.com/scholar?q=eyewitness+testimony+Loftus+reliability+memory", source: "Google Scholar" },
    { title: "Eyewitness testimony", url: "https://dictionary.apa.org/eyewitness-testimony", source: "APA Dictionary" },
  ],
  "Lie_Detection": [
    { title: "Lie detection", url: "https://en.wikipedia.org/wiki/Lie_detection", source: "Wikipedia" },
    { title: "Lie detection research", url: "https://scholar.google.com/scholar?q=lie+detection+deception+cognitive+load+polygraph", source: "Google Scholar" },
    { title: "Polygraph", url: "https://dictionary.apa.org/polygraph", source: "APA Dictionary" },
  ],

  // ═══════════════════════════════════════════════════════════
  // KEY FIGURES
  // ═══════════════════════════════════════════════════════════
  "Wilhelm_Wundt": [
    { title: "Wilhelm Wundt", url: "https://en.wikipedia.org/wiki/Wilhelm_Wundt", source: "Wikipedia" },
    { title: "Wilhelm Wundt research", url: "https://scholar.google.com/scholar?q=Wilhelm+Wundt+experimental+psychology+introspection", source: "Google Scholar" },
    { title: "Wundt's laboratory and structuralism", url: "https://scholar.google.com/scholar?q=Wundt+Leipzig+laboratory+structuralism+history+psychology", source: "Google Scholar" },
  ],
  "William_James": [
    { title: "William James", url: "https://en.wikipedia.org/wiki/William_James", source: "Wikipedia" },
    { title: "William James research", url: "https://scholar.google.com/scholar?q=William+James+Principles+of+Psychology+consciousness", source: "Google Scholar" },
    { title: "William James", url: "https://plato.stanford.edu/entries/james/", source: "Stanford Encyclopedia" },
  ],
  "Hermann_Ebbinghaus": [
    { title: "Hermann Ebbinghaus", url: "https://en.wikipedia.org/wiki/Hermann_Ebbinghaus", source: "Wikipedia" },
    { title: "Ebbinghaus research", url: "https://scholar.google.com/scholar?q=Ebbinghaus+memory+forgetting+curve+nonsense+syllables", source: "Google Scholar" },
    { title: "Memory: A Contribution to Experimental Psychology", url: "https://scholar.google.com/scholar?q=Ebbinghaus+%22Memory+A+Contribution+to+Experimental+Psychology%22", source: "Google Scholar" },
  ],
  "Edward_Thorndike": [
    { title: "Edward Thorndike", url: "https://en.wikipedia.org/wiki/Edward_Thorndike", source: "Wikipedia" },
    { title: "Thorndike research", url: "https://scholar.google.com/scholar?q=Thorndike+law+of+effect+connectionism+learning", source: "Google Scholar" },
    { title: "Law of effect", url: "https://en.wikipedia.org/wiki/Law_of_effect", source: "Wikipedia" },
  ],
  "Max_Wertheimer": [
    { title: "Max Wertheimer", url: "https://en.wikipedia.org/wiki/Max_Wertheimer", source: "Wikipedia" },
    { title: "Wertheimer research", url: "https://scholar.google.com/scholar?q=Wertheimer+Gestalt+psychology+phi+phenomenon+productive+thinking", source: "Google Scholar" },
    { title: "Gestalt psychology", url: "https://en.wikipedia.org/wiki/Gestalt_psychology", source: "Wikipedia" },
  ],
  "Wolfgang_Kohler": [
    { title: "Wolfgang Kohler", url: "https://en.wikipedia.org/wiki/Wolfgang_K%C3%B6hler", source: "Wikipedia" },
    { title: "Kohler research", url: "https://scholar.google.com/scholar?q=Kohler+insight+learning+apes+Gestalt+psychology", source: "Google Scholar" },
    { title: "The Mentality of Apes (Kohler)", url: "https://scholar.google.com/scholar?q=Kohler+%22Mentality+of+Apes%22+insight+problem+solving", source: "Google Scholar" },
  ],
  "Ivan_Pavlov": [
    { title: "Ivan Pavlov", url: "https://en.wikipedia.org/wiki/Ivan_Pavlov", source: "Wikipedia" },
    { title: "Pavlov research", url: "https://scholar.google.com/scholar?q=Pavlov+classical+conditioning+conditioned+reflex", source: "Google Scholar" },
    { title: "Classical conditioning", url: "https://en.wikipedia.org/wiki/Classical_conditioning", source: "Wikipedia" },
  ],
  "B_F_Skinner": [
    { title: "B. F. Skinner", url: "https://en.wikipedia.org/wiki/B._F._Skinner", source: "Wikipedia" },
    { title: "Skinner research", url: "https://scholar.google.com/scholar?q=Skinner+operant+conditioning+reinforcement+behaviorism", source: "Google Scholar" },
    { title: "B.F. Skinner", url: "https://dictionary.apa.org/skinner-burrhus-frederic", source: "APA Dictionary" },
  ],
  "Ulric_Neisser": [
    { title: "Ulric Neisser", url: "https://en.wikipedia.org/wiki/Ulric_Neisser", source: "Wikipedia" },
    { title: "Neisser research", url: "https://scholar.google.com/scholar?q=Ulric+Neisser+cognitive+psychology+1967", source: "Google Scholar" },
    { title: "Cognitive Psychology (Neisser, 1967)", url: "https://scholar.google.com/scholar?q=Neisser+%22Cognitive+Psychology%22+1967+book", source: "Google Scholar" },
  ],
  "George_Miller": [
    { title: "George A. Miller", url: "https://en.wikipedia.org/wiki/George_Armitage_Miller", source: "Wikipedia" },
    { title: "Miller research", url: "https://scholar.google.com/scholar?q=George+Miller+magical+number+seven+chunking", source: "Google Scholar" },
    { title: "The magical number seven (Miller, 1956)", url: "https://scholar.google.com/scholar?q=Miller+%22magical+number+seven+plus+or+minus+two%22", source: "Google Scholar" },
  ],
  "Noam_Chomsky": [
    { title: "Noam Chomsky", url: "https://en.wikipedia.org/wiki/Noam_Chomsky", source: "Wikipedia" },
    { title: "Chomsky linguistics research", url: "https://scholar.google.com/scholar?q=Chomsky+universal+grammar+generative+linguistics", source: "Google Scholar" },
    { title: "Noam Chomsky", url: "https://plato.stanford.edu/entries/linguistics/#GenGra", source: "Stanford Encyclopedia" },
  ],
  "Herbert_Simon": [
    { title: "Herbert A. Simon", url: "https://en.wikipedia.org/wiki/Herbert_A._Simon", source: "Wikipedia" },
    { title: "Simon research", url: "https://scholar.google.com/scholar?q=Herbert+Simon+bounded+rationality+problem+solving+cognitive", source: "Google Scholar" },
    { title: "Bounded Rationality", url: "https://plato.stanford.edu/entries/bounded-rationality/", source: "Stanford Encyclopedia" },
  ],
  "Allen_Newell": [
    { title: "Allen Newell", url: "https://en.wikipedia.org/wiki/Allen_Newell", source: "Wikipedia" },
    { title: "Newell research", url: "https://scholar.google.com/scholar?q=Allen+Newell+SOAR+unified+theories+cognition", source: "Google Scholar" },
    { title: "Human Problem Solving (Newell & Simon, 1972)", url: "https://scholar.google.com/scholar?q=Newell+Simon+%22Human+Problem+Solving%22+1972", source: "Google Scholar" },
  ],
  "Endel_Tulving": [
    { title: "Endel Tulving", url: "https://en.wikipedia.org/wiki/Endel_Tulving", source: "Wikipedia" },
    { title: "Tulving research", url: "https://scholar.google.com/scholar?q=Endel+Tulving+episodic+semantic+memory", source: "Google Scholar" },
    { title: "Episodic and semantic memory (Tulving, 1972)", url: "https://scholar.google.com/scholar?q=Tulving+%22episodic+and+semantic+memory%22+1972", source: "Google Scholar" },
  ],
  "Alan_Baddeley": [
    { title: "Alan Baddeley", url: "https://en.wikipedia.org/wiki/Alan_Baddeley", source: "Wikipedia" },
    { title: "Baddeley research", url: "https://scholar.google.com/scholar?q=Alan+Baddeley+working+memory+model+phonological+loop", source: "Google Scholar" },
    { title: "Working Memory (Baddeley & Hitch, 1974)", url: "https://scholar.google.com/scholar?q=Baddeley+Hitch+%22working+memory%22+1974", source: "Google Scholar" },
  ],
  "Elizabeth_Loftus": [
    { title: "Elizabeth Loftus", url: "https://en.wikipedia.org/wiki/Elizabeth_Loftus", source: "Wikipedia" },
    { title: "Loftus research", url: "https://scholar.google.com/scholar?q=Elizabeth+Loftus+misinformation+effect+false+memory", source: "Google Scholar" },
    { title: "Misinformation effect", url: "https://en.wikipedia.org/wiki/Misinformation_effect", source: "Wikipedia" },
  ],
  "Fergus_Craik": [
    { title: "Fergus I. M. Craik", url: "https://en.wikipedia.org/wiki/Fergus_I._M._Craik", source: "Wikipedia" },
    { title: "Craik research", url: "https://scholar.google.com/scholar?q=Craik+Lockhart+levels+of+processing+depth+encoding", source: "Google Scholar" },
    { title: "Levels of processing (Craik & Lockhart, 1972)", url: "https://scholar.google.com/scholar?q=Craik+Lockhart+%22Levels+of+processing%22+1972", source: "Google Scholar" },
  ],
  "Henry_Roediger": [
    { title: "Henry L. Roediger III", url: "https://en.wikipedia.org/wiki/Henry_L._Roediger_III", source: "Wikipedia" },
    { title: "Roediger research", url: "https://scholar.google.com/scholar?q=Roediger+testing+effect+retrieval+practice+memory", source: "Google Scholar" },
    { title: "DRM paradigm (Roediger & McDermott, 1995)", url: "https://scholar.google.com/scholar?q=Roediger+McDermott+%22creating+false+memories%22+1995", source: "Google Scholar" },
  ],
  "Jean_Piaget": [
    { title: "Jean Piaget", url: "https://en.wikipedia.org/wiki/Jean_Piaget", source: "Wikipedia" },
    { title: "Piaget research", url: "https://scholar.google.com/scholar?q=Jean+Piaget+cognitive+development+stages+constructivism", source: "Google Scholar" },
    { title: "Jean Piaget", url: "https://plato.stanford.edu/entries/piaget/", source: "Stanford Encyclopedia" },
  ],
  "Lev_Vygotsky": [
    { title: "Lev Vygotsky", url: "https://en.wikipedia.org/wiki/Lev_Vygotsky", source: "Wikipedia" },
    { title: "Vygotsky research", url: "https://scholar.google.com/scholar?q=Vygotsky+zone+proximal+development+social+constructivism", source: "Google Scholar" },
    { title: "Mind in Society (Vygotsky)", url: "https://scholar.google.com/scholar?q=Vygotsky+%22Mind+in+Society%22+higher+psychological+processes", source: "Google Scholar" },
  ],
  "Jerome_Bruner": [
    { title: "Jerome Bruner", url: "https://en.wikipedia.org/wiki/Jerome_Bruner", source: "Wikipedia" },
    { title: "Bruner research", url: "https://scholar.google.com/scholar?q=Jerome+Bruner+discovery+learning+cognitive+development", source: "Google Scholar" },
    { title: "A Study of Thinking (Bruner et al., 1956)", url: "https://scholar.google.com/scholar?q=Bruner+Goodnow+Austin+%22A+Study+of+Thinking%22+1956", source: "Google Scholar" },
  ],
  "Daniel_Kahneman_Cog": [
    { title: "Daniel Kahneman", url: "https://en.wikipedia.org/wiki/Daniel_Kahneman", source: "Wikipedia" },
    { title: "Kahneman research", url: "https://scholar.google.com/scholar?q=Kahneman+judgment+under+uncertainty+heuristics+biases", source: "Google Scholar" },
    { title: "Thinking, Fast and Slow (Kahneman)", url: "https://scholar.google.com/scholar?q=Kahneman+%22Thinking+Fast+and+Slow%22", source: "Google Scholar" },
  ],
  "Amos_Tversky_Cog": [
    { title: "Amos Tversky", url: "https://en.wikipedia.org/wiki/Amos_Tversky", source: "Wikipedia" },
    { title: "Tversky research", url: "https://scholar.google.com/scholar?q=Tversky+Kahneman+heuristics+biases+prospect+theory", source: "Google Scholar" },
    { title: "Judgment under Uncertainty (Tversky & Kahneman, 1974)", url: "https://scholar.google.com/scholar?q=Tversky+Kahneman+%22Judgment+under+Uncertainty%22+1974", source: "Google Scholar" },
  ],
  "Gerd_Gigerenzer": [
    { title: "Gerd Gigerenzer", url: "https://en.wikipedia.org/wiki/Gerd_Gigerenzer", source: "Wikipedia" },
    { title: "Gigerenzer research", url: "https://scholar.google.com/scholar?q=Gigerenzer+fast+frugal+heuristics+ecological+rationality", source: "Google Scholar" },
    { title: "Simple Heuristics That Make Us Smart", url: "https://scholar.google.com/scholar?q=Gigerenzer+Todd+%22Simple+Heuristics+That+Make+Us+Smart%22", source: "Google Scholar" },
  ],
  "Anne_Treisman": [
    { title: "Anne Treisman", url: "https://en.wikipedia.org/wiki/Anne_Treisman", source: "Wikipedia" },
    { title: "Treisman research", url: "https://scholar.google.com/scholar?q=Anne+Treisman+feature+integration+theory+attention", source: "Google Scholar" },
    { title: "A feature-integration theory of attention (Treisman & Gelade, 1980)", url: "https://scholar.google.com/scholar?q=Treisman+Gelade+%22feature+integration+theory+of+attention%22+1980", source: "Google Scholar" },
  ],
  "Donald_Broadbent": [
    { title: "Donald Broadbent", url: "https://en.wikipedia.org/wiki/Donald_Broadbent", source: "Wikipedia" },
    { title: "Broadbent research", url: "https://scholar.google.com/scholar?q=Donald+Broadbent+filter+theory+attention+1958", source: "Google Scholar" },
    { title: "Perception and Communication (Broadbent, 1958)", url: "https://scholar.google.com/scholar?q=Broadbent+%22Perception+and+Communication%22+1958", source: "Google Scholar" },
  ],
  "Michael_Posner": [
    { title: "Michael Posner (psychologist)", url: "https://en.wikipedia.org/wiki/Michael_Posner_(psychologist)", source: "Wikipedia" },
    { title: "Posner research", url: "https://scholar.google.com/scholar?q=Michael+Posner+attention+orienting+cueing+paradigm", source: "Google Scholar" },
    { title: "Posner cueing task", url: "https://en.wikipedia.org/wiki/Posner_cueing_task", source: "Wikipedia" },
  ],
  "Roger_Shepard": [
    { title: "Roger Shepard", url: "https://en.wikipedia.org/wiki/Roger_Shepard", source: "Wikipedia" },
    { title: "Shepard research", url: "https://scholar.google.com/scholar?q=Roger+Shepard+mental+rotation+cognitive+psychology", source: "Google Scholar" },
    { title: "Mental rotation (Shepard & Metzler, 1971)", url: "https://scholar.google.com/scholar?q=Shepard+Metzler+%22mental+rotation%22+1971", source: "Google Scholar" },
  ],
  "Steven_Pinker": [
    { title: "Steven Pinker", url: "https://en.wikipedia.org/wiki/Steven_Pinker", source: "Wikipedia" },
    { title: "Pinker research", url: "https://scholar.google.com/scholar?q=Steven+Pinker+language+instinct+cognitive+science", source: "Google Scholar" },
    { title: "The Language Instinct (Pinker)", url: "https://scholar.google.com/scholar?q=Pinker+%22Language+Instinct%22+how+mind+creates+language", source: "Google Scholar" },
  ],
  "Michael_Gazzaniga": [
    { title: "Michael Gazzaniga", url: "https://en.wikipedia.org/wiki/Michael_Gazzaniga", source: "Wikipedia" },
    { title: "Gazzaniga research", url: "https://scholar.google.com/scholar?q=Gazzaniga+split+brain+lateralization+cognitive+neuroscience", source: "Google Scholar" },
    { title: "Split-brain research", url: "https://en.wikipedia.org/wiki/Split-brain", source: "Wikipedia" },
  ],
  "Stanislas_Dehaene": [
    { title: "Stanislas Dehaene", url: "https://en.wikipedia.org/wiki/Stanislas_Dehaene", source: "Wikipedia" },
    { title: "Dehaene research", url: "https://scholar.google.com/scholar?q=Stanislas+Dehaene+number+sense+consciousness+reading", source: "Google Scholar" },
    { title: "The Number Sense (Dehaene)", url: "https://scholar.google.com/scholar?q=Dehaene+%22Number+Sense%22+mathematical+cognition", source: "Google Scholar" },
  ],
  "Eleanor_Rosch": [
    { title: "Eleanor Rosch", url: "https://en.wikipedia.org/wiki/Eleanor_Rosch", source: "Wikipedia" },
    { title: "Rosch research", url: "https://scholar.google.com/scholar?q=Eleanor+Rosch+prototype+theory+categorization+basic+level", source: "Google Scholar" },
    { title: "Natural categories (Rosch, 1973)", url: "https://scholar.google.com/scholar?q=Rosch+%22natural+categories%22+prototype+1973", source: "Google Scholar" },
  ],
};
