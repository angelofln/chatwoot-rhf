// RHF: páginas do CRM RHF Talentos abertas dentro do Chatwoot.
import {
  CONVERSATION_PERMISSIONS,
  ROLES,
} from 'dashboard/constants/permissions';
import { frontendURL } from '../../../helper/URLHelper';
import CrmEmbed from './pages/CrmEmbed.vue';

export const routes = [
  {
    path: frontendURL('accounts/:accountId/crm/:page'),
    name: 'crm_embed',
    component: CrmEmbed,
    meta: {
      permissions: [...ROLES, ...CONVERSATION_PERMISSIONS],
    },
  },
];
