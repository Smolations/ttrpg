import races from './races';
import factions from './factions';
import religions from './religions';
import languageCategories from './language-categories';
import languages from './languages';
import knowledgeCategories from './knowledge-categories';
import knowledge from './knowledge';
import connectionCategories from './connection-categories';
import connections from './connections';
import classes from './classes';
import subclasses from './subclasses';
import attributes from './attributes';
import subattributes from './subattributes';
import skills from './skills';
import subskills from './subskills';
import bonuses from './bonuses';

import modifiers from './modifiers';
import modifierProfiles from './modifier-profiles';
import modifierValues from './modifier-values';


const collections = {
  RACES: { name: 'races', collectionOptions: {} },
}


export default {
  RACES: races,
  FACTIONS: factions,
  RELIGIONS: religions,
  LANGUAGE_CATEGORIES: languageCategories,
  LANGUAGES: languages,
  KNOWLEDGE_CATEGORIES: knowledgeCategories,
  KNOWLEDGE: knowledge,
  CONNECTION_CATEGORIES: connectionCategories,
  CONNECTIONS: connections,
  CLASSES: classes,
  SUBCLASSES: subclasses,
  ATTRIBUTES: attributes,
  SUBATTRIBUTES: subattributes,
  SKILLS: skills,
  SUBSKILLS: subskills,
  BONUSES: bonuses,

  MODIFIERS: modifiers,
  MODIFIER_PROFILES: modifierProfiles,
  MODIFIER_VALUES: modifierValues,
};
