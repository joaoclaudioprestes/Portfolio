import type { Project } from '../schema'
import blog from './blog'
import ghibli from './ghibli'
import jordan from './jordan'
import login from './login'
import techblog from './techblog'

/** Add a project: create `./<slug>.ts` and list it here. */
export const projects: Project[] = [techblog, ghibli, jordan, blog, login]
