type LocalizedCopy = {
  title?: string
  description?: string
  playerembed?: string
  name?: string
}

type Answer = {
  id: number
  cate: number
  slug: string
  title: string
  subtitle: string
  host_name: string
  host_title: string
  host_bio: string
  created_at: string
  updated_at: string
  thumbnail: string
  isVideo?: boolean
  isTestimonial?: boolean
  embeded_thumnail?: string
  playerembed?: string
  en: LocalizedCopy
  es: LocalizedCopy
}

type Category = {
  id: number
  slug: string
  name: string
  description: string
  supercategory: string
  background: string
  en: LocalizedCopy
  es: LocalizedCopy
  answers: Answer[]
}

const videoEmbed = (videoId: string) =>
  `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

const articleHtml = (topic: string, emphasis: string) => `
  <p>${topic} is one of the questions people revisit again and again. This preview app uses local mock content so you can open the screens and review the layout in the browser without needing the client's backend.</p>
  <p>The design emphasizes clear typography, strong spacing, and a confident editorial rhythm. It also gives you room to test how long content behaves across cards, hero areas, and detail templates.</p>
  <blockquote>${emphasis}</blockquote>
  <p>If you later connect this preview to a real API, the same page structures can be wired to live categories, answers, testimonials, and church records.</p>
`

const answersByCategory: Record<string, Omit<Answer, 'cate'>[]> = {
  forgiveness: [
    {
      id: 101,
      slug: 'can-i-really-be-forgiven',
      title: 'Can I Really Be Forgiven?',
      subtitle: 'What grace means when you feel stuck in regret.',
      host_name: 'Daniel Harper',
      host_title: 'Teaching Pastor',
      host_bio: 'Daniel helps readers connect honest questions with biblical clarity and practical next steps.',
      created_at: '2026-03-20T08:00:00.000Z',
      updated_at: '2026-03-21T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
      isVideo: true,
      playerembed: videoEmbed('dQw4w9WgXcQ'),
      en: {
        title: 'Can I Really Be Forgiven?',
        description: articleHtml('Forgiveness', 'Grace is not earned by pretending your pain is small.'),
        playerembed: videoEmbed('dQw4w9WgXcQ'),
      },
      es: {
        title: 'Can I Really Be Forgiven?',
        description: articleHtml('Forgiveness', 'Grace is not earned by pretending your pain is small.'),
        playerembed: videoEmbed('dQw4w9WgXcQ'),
      },
    },
    {
      id: 102,
      slug: 'how-do-i-forgive-someone',
      title: 'How Do I Forgive Someone?',
      subtitle: 'Moving toward healing without minimizing what happened.',
      host_name: 'Rachel Owens',
      host_title: 'Writer & Mentor',
      host_bio: 'Rachel writes about spiritual formation, recovery, and everyday discipleship.',
      created_at: '2026-03-12T08:00:00.000Z',
      updated_at: '2026-03-13T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'How Do I Forgive Someone?',
        description: articleHtml('Forgiving others', 'Forgiveness can be courageous and slow at the same time.'),
      },
      es: {
        title: 'How Do I Forgive Someone?',
        description: articleHtml('Forgiving others', 'Forgiveness can be courageous and slow at the same time.'),
      },
    },
    {
      id: 103,
      slug: 'why-does-guilt-linger',
      title: 'Why Does Guilt Linger?',
      subtitle: 'Understanding shame, memory, and hope.',
      host_name: 'Marcus Lee',
      host_title: 'Apologist',
      host_bio: 'Marcus focuses on apologetics, theology, and helping skeptics ask better questions.',
      created_at: '2026-02-25T08:00:00.000Z',
      updated_at: '2026-02-26T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'Why Does Guilt Linger?',
        description: articleHtml('Lingering guilt', 'Hope grows when truth is spoken with patience.'),
      },
      es: {
        title: 'Why Does Guilt Linger?',
        description: articleHtml('Lingering guilt', 'Hope grows when truth is spoken with patience.'),
      },
    },
  ],
  purpose: [
    {
      id: 201,
      slug: 'why-am-i-here',
      title: 'Why Am I Here?',
      subtitle: 'A thoughtful starting point for questions about meaning.',
      host_name: 'Elena Brooks',
      host_title: 'Content Director',
      host_bio: 'Elena builds accessible teaching resources for seekers and church communities.',
      created_at: '2026-03-05T08:00:00.000Z',
      updated_at: '2026-03-06T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      isVideo: true,
      playerembed: videoEmbed('3JZ_D3ELwOQ'),
      en: {
        title: 'Why Am I Here?',
        description: articleHtml('Purpose', 'Meaning deepens when identity is rooted in something larger than achievement.'),
        playerembed: videoEmbed('3JZ_D3ELwOQ'),
      },
      es: {
        title: 'Why Am I Here?',
        description: articleHtml('Purpose', 'Meaning deepens when identity is rooted in something larger than achievement.'),
        playerembed: videoEmbed('3JZ_D3ELwOQ'),
      },
    },
    {
      id: 202,
      slug: 'does-my-work-matter',
      title: 'Does My Work Matter?',
      subtitle: 'Finding purpose in ordinary routines.',
      host_name: 'Nate Collins',
      host_title: 'Pastor',
      host_bio: 'Nate teaches on vocation, wisdom, and practical discipleship.',
      created_at: '2026-03-02T08:00:00.000Z',
      updated_at: '2026-03-02T09:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'Does My Work Matter?',
        description: articleHtml('Work and calling', 'Faithfulness often looks quieter than ambition, but it is no less meaningful.'),
      },
      es: {
        title: 'Does My Work Matter?',
        description: articleHtml('Work and calling', 'Faithfulness often looks quieter than ambition, but it is no less meaningful.'),
      },
    },
    {
      id: 203,
      slug: 'how-do-i-make-wise-decisions',
      title: 'How Do I Make Wise Decisions?',
      subtitle: 'Discernment, community, and trust.',
      host_name: 'Claire Diaz',
      host_title: 'Bible Teacher',
      host_bio: 'Claire writes about discernment, prayer, and following Jesus in complex seasons.',
      created_at: '2026-02-19T08:00:00.000Z',
      updated_at: '2026-02-20T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'How Do I Make Wise Decisions?',
        description: articleHtml('Decision making', 'Wisdom grows where humility and courage meet.'),
      },
      es: {
        title: 'How Do I Make Wise Decisions?',
        description: articleHtml('Decision making', 'Wisdom grows where humility and courage meet.'),
      },
    },
  ],
  suffering: [
    {
      id: 301,
      slug: 'where-is-god-in-pain',
      title: 'Where Is God in Pain?',
      subtitle: 'Holding faith together during suffering.',
      host_name: 'Micah Sterling',
      host_title: 'Pastoral Counselor',
      host_bio: 'Micah serves people walking through grief, depression, and family crisis.',
      created_at: '2026-03-01T08:00:00.000Z',
      updated_at: '2026-03-02T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80',
      isVideo: true,
      playerembed: videoEmbed('V-_O7nl0Ii0'),
      en: {
        title: 'Where Is God in Pain?',
        description: articleHtml('Suffering', 'Lament is not the opposite of faith. It is often faith refusing to go silent.'),
        playerembed: videoEmbed('V-_O7nl0Ii0'),
      },
      es: {
        title: 'Where Is God in Pain?',
        description: articleHtml('Suffering', 'Lament is not the opposite of faith. It is often faith refusing to go silent.'),
        playerembed: videoEmbed('V-_O7nl0Ii0'),
      },
    },
    {
      id: 302,
      slug: 'why-do-bad-things-happen',
      title: 'Why Do Bad Things Happen?',
      subtitle: 'A compassionate introduction to a difficult question.',
      host_name: 'Grace Turner',
      host_title: 'Writer',
      host_bio: 'Grace works on faith-and-culture resources for people exploring Christianity.',
      created_at: '2026-02-21T08:00:00.000Z',
      updated_at: '2026-02-22T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'Why Do Bad Things Happen?',
        description: articleHtml('Pain and tragedy', 'A hard question deserves more than a slogan.'),
      },
      es: {
        title: 'Why Do Bad Things Happen?',
        description: articleHtml('Pain and tragedy', 'A hard question deserves more than a slogan.'),
      },
    },
    {
      id: 303,
      slug: 'how-can-i-find-hope-again',
      title: 'How Can I Find Hope Again?',
      subtitle: 'Small steps toward trust and renewal.',
      host_name: 'Aaron Wells',
      host_title: 'Campus Speaker',
      host_bio: 'Aaron helps students and young adults explore faith with honesty and depth.',
      created_at: '2026-02-11T08:00:00.000Z',
      updated_at: '2026-02-12T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'How Can I Find Hope Again?',
        description: articleHtml('Hope in hardship', 'Hope can begin as a whisper before it becomes a song.'),
      },
      es: {
        title: 'How Can I Find Hope Again?',
        description: articleHtml('Hope in hardship', 'Hope can begin as a whisper before it becomes a song.'),
      },
    },
  ],
  bible: [
    {
      id: 401,
      slug: 'can-i-trust-the-bible',
      title: 'Can I Trust the Bible?',
      subtitle: 'History, reliability, and why this question matters.',
      host_name: 'Andrew Holt',
      host_title: 'Professor of Theology',
      host_bio: 'Andrew teaches biblical studies and regularly speaks on apologetics and worldview.',
      created_at: '2026-03-14T08:00:00.000Z',
      updated_at: '2026-03-14T09:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=80',
      isVideo: true,
      playerembed: videoEmbed('M7lc1UVf-VE'),
      en: {
        title: 'Can I Trust the Bible?',
        description: articleHtml('The Bible', 'Good questions are not threats to truth.'),
        playerembed: videoEmbed('M7lc1UVf-VE'),
      },
      es: {
        title: 'Can I Trust the Bible?',
        description: articleHtml('The Bible', 'Good questions are not threats to truth.'),
        playerembed: videoEmbed('M7lc1UVf-VE'),
      },
    },
    {
      id: 402,
      slug: 'how-do-i-start-reading-the-bible',
      title: 'How Do I Start Reading the Bible?',
      subtitle: 'A clear starting point for beginners.',
      host_name: 'Lydia Kim',
      host_title: 'Discipleship Coach',
      host_bio: 'Lydia builds practical tools for spiritual growth and small-group learning.',
      created_at: '2026-03-09T08:00:00.000Z',
      updated_at: '2026-03-10T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'How Do I Start Reading the Bible?',
        description: articleHtml('Reading the Bible', 'Consistency matters more than intensity at the beginning.'),
      },
      es: {
        title: 'How Do I Start Reading the Bible?',
        description: articleHtml('Reading the Bible', 'Consistency matters more than intensity at the beginning.'),
      },
    },
    {
      id: 403,
      slug: 'why-are-there-so-many-translations',
      title: 'Why Are There So Many Translations?',
      subtitle: 'A helpful guide to what changes and what does not.',
      host_name: 'Jordan Price',
      host_title: 'Bible Teacher',
      host_bio: 'Jordan helps readers navigate the Bible with confidence and clarity.',
      created_at: '2026-02-28T08:00:00.000Z',
      updated_at: '2026-03-01T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'Why Are There So Many Translations?',
        description: articleHtml('Bible translations', 'Clarity improves when we learn what translators are trying to preserve.'),
      },
      es: {
        title: 'Why Are There So Many Translations?',
        description: articleHtml('Bible translations', 'Clarity improves when we learn what translators are trying to preserve.'),
      },
    },
  ],
  family: [
    {
      id: 501,
      slug: 'how-do-i-pray-for-my-family',
      title: 'How Do I Pray for My Family?',
      subtitle: 'Simple rhythms of prayer for everyday life.',
      host_name: 'Melissa Lane',
      host_title: 'Family Ministry Leader',
      host_bio: 'Melissa writes on parenting, marriage, and building faith at home.',
      created_at: '2026-03-15T08:00:00.000Z',
      updated_at: '2026-03-16T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'How Do I Pray for My Family?',
        description: articleHtml('Prayer for family', 'Prayer is not about polished words. It is about honest dependence.'),
      },
      es: {
        title: 'How Do I Pray for My Family?',
        description: articleHtml('Prayer for family', 'Prayer is not about polished words. It is about honest dependence.'),
      },
    },
    {
      id: 502,
      slug: 'restoring-trust-at-home',
      title: 'Restoring Trust at Home',
      subtitle: 'Steps toward honesty, repair, and patience.',
      host_name: 'Paul Bennett',
      host_title: 'Counselor',
      host_bio: 'Paul works with couples and families rebuilding trust and connection.',
      created_at: '2026-03-07T08:00:00.000Z',
      updated_at: '2026-03-08T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'Restoring Trust at Home',
        description: articleHtml('Family trust', 'Repair usually begins with truth told gently and consistently.'),
      },
      es: {
        title: 'Restoring Trust at Home',
        description: articleHtml('Family trust', 'Repair usually begins with truth told gently and consistently.'),
      },
    },
    {
      id: 503,
      slug: 'finding-peace-in-parenting',
      title: 'Finding Peace in Parenting',
      subtitle: 'Grace for overwhelmed moms and dads.',
      host_name: 'Hannah Reed',
      host_title: 'Author',
      host_bio: 'Hannah encourages parents with gospel-centered, practical wisdom.',
      created_at: '2026-02-14T08:00:00.000Z',
      updated_at: '2026-02-15T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'Finding Peace in Parenting',
        description: articleHtml('Parenting', 'Peace grows when perfection is no longer the goal.'),
      },
      es: {
        title: 'Finding Peace in Parenting',
        description: articleHtml('Parenting', 'Peace grows when perfection is no longer the goal.'),
      },
    },
  ],
  science: [
    {
      id: 601,
      slug: 'does-science-disprove-god',
      title: 'Does Science Disprove God?',
      subtitle: 'A thoughtful look at faith and evidence.',
      host_name: 'Sam Rivera',
      host_title: 'Researcher',
      host_bio: 'Sam explores the relationship between science, philosophy, and Christian faith.',
      created_at: '2026-03-10T08:00:00.000Z',
      updated_at: '2026-03-11T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'Does Science Disprove God?',
        description: articleHtml('Science and faith', 'Curiosity can strengthen belief when it is paired with humility.'),
      },
      es: {
        title: 'Does Science Disprove God?',
        description: articleHtml('Science and faith', 'Curiosity can strengthen belief when it is paired with humility.'),
      },
    },
    {
      id: 602,
      slug: 'how-big-is-the-universe',
      title: 'How Big Is the Universe?',
      subtitle: 'Wonder, scale, and what awe can teach us.',
      host_name: 'Ivy Morgan',
      host_title: 'Science Writer',
      host_bio: 'Ivy writes for readers who love both discovery and theology.',
      created_at: '2026-03-03T08:00:00.000Z',
      updated_at: '2026-03-04T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'How Big Is the Universe?',
        description: articleHtml('The universe', 'Awe does not shrink us. It can reframe us.'),
      },
      es: {
        title: 'How Big Is the Universe?',
        description: articleHtml('The universe', 'Awe does not shrink us. It can reframe us.'),
      },
    },
    {
      id: 603,
      slug: 'can-faith-and-reason-work-together',
      title: 'Can Faith and Reason Work Together?',
      subtitle: 'Yes, and the conversation is richer than you think.',
      host_name: 'Noah Grant',
      host_title: 'Apologetics Speaker',
      host_bio: 'Noah helps students examine faith with intellectual honesty.',
      created_at: '2026-02-17T08:00:00.000Z',
      updated_at: '2026-02-18T08:00:00.000Z',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      en: {
        title: 'Can Faith and Reason Work Together?',
        description: articleHtml('Faith and reason', 'Truth does not fear close inspection.'),
      },
      es: {
        title: 'Can Faith and Reason Work Together?',
        description: articleHtml('Faith and reason', 'Truth does not fear close inspection.'),
      },
    },
  ],
}

const categoryDefinitions = [
  {
    id: 1,
    slug: 'forgiveness',
    name: 'Forgiveness',
    description: 'Help for regret, shame, and making peace with the past.',
    supercategory: 'christianity',
    background: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 2,
    slug: 'purpose',
    name: 'Purpose',
    description: 'Meaning, calling, and next steps for everyday life.',
    supercategory: 'family',
    background: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 3,
    slug: 'suffering',
    name: 'Suffering',
    description: 'Hope, grief, lament, and questions in hard seasons.',
    supercategory: 'suffering',
    background: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 4,
    slug: 'bible',
    name: 'Bible',
    description: 'Reliability, reading plans, and practical Bible questions.',
    supercategory: 'christianity',
    background: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 5,
    slug: 'family',
    name: 'Family',
    description: 'Encouragement for parenting, marriage, and home life.',
    supercategory: 'family',
    background: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 6,
    slug: 'science',
    name: 'Science',
    description: 'Curiosity, evidence, and the relationship between faith and reason.',
    supercategory: 'science',
    background: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1400&q=80',
  },
] as const

export const categories: Category[] = categoryDefinitions.map((category) => {
  const answers = (answersByCategory[category.slug] || []).map((answer) => ({
    ...answer,
    cate: category.id,
  }))

  return {
    ...category,
    en: { name: category.name, description: category.description },
    es: { name: category.name, description: category.description },
    answers,
  }
})

export const answers = categories.flatMap((category) => category.answers)

export const testimonials = [
  {
    id: 9001,
    cate: 2,
    slug: 'finding-peace-after-loss',
    title: 'Finding Peace After Loss',
    subtitle: 'A short testimony about hope returning in grief.',
    host_name: 'Alyssa Carter',
    host_title: 'Testimony',
    host_bio: 'Alyssa shares how a local church and thoughtful resources helped her heal.',
    created_at: '2026-03-18T08:00:00.000Z',
    updated_at: '2026-03-19T08:00:00.000Z',
    thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    embeded_thumnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    isVideo: true,
    isTestimonial: true,
    playerembed: videoEmbed('ysz5S6PUM-U'),
    en: {
      title: 'Finding Peace After Loss',
      description: articleHtml('Personal testimony', 'Stories of hope often make difficult truths feel reachable.'),
      playerembed: videoEmbed('ysz5S6PUM-U'),
    },
    es: {
      title: 'Finding Peace After Loss',
      description: articleHtml('Personal testimony', 'Stories of hope often make difficult truths feel reachable.'),
      playerembed: videoEmbed('ysz5S6PUM-U'),
    },
  },
]

export const pages = [
  {
    slug: 'about-truelife-org',
    content: `
      <p>TrueLife exists to create thoughtful digital resources that help people explore Christianity, process real questions, and connect with local churches.</p>
      <p>This preview version is intentionally self-contained, so every page can render in the browser without a backend API.</p>
      <p>When you receive the full client project, these sections can be switched back to real CMS content and service integrations.</p>
    `,
    es_content: `
      <p>TrueLife exists to create thoughtful digital resources that help people explore Christianity, process real questions, and connect with local churches.</p>
      <p>This preview version is intentionally self-contained, so every page can render in the browser without a backend API.</p>
      <p>When you receive the full client project, these sections can be switched back to real CMS content and service integrations.</p>
    `,
    embed: videoEmbed('aqz-KE-bpKQ'),
    es_embed: videoEmbed('aqz-KE-bpKQ'),
  },
]

export const locations = [
  {
    id: 1,
    account_id: 1,
    slug: 'grace-harbor-church',
    name: 'Grace Harbor Church',
    address: '1200 Lakeside Ave',
    city: 'Lynchburg',
    state: 'VA',
    zipcode: '24502',
    country: 'USA',
    latitude: 37.358,
    longitude: -79.176,
    phone: '(434) 555-0144',
    cell_phone: '(434) 555-0144',
    distance: 2.4,
    contact_email: 'hello@graceharbor.example',
    profile_website: 'graceharbor.example',
    profile_cover_art: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    profile_headshot: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    profile_description: '<p>Grace Harbor Church is a welcoming community focused on biblical teaching, worship, and practical care for families in Lynchburg.</p><p>We love serving our neighbors and helping new visitors feel at home from the first Sunday.</p>',
    profile_service_times: 'Sunday Gathering:<br/>9:00 AM<br/>Sunday Gathering:<br/>11:00 AM<br/>Wednesday Prayer:<br/>6:30 PM',
    pastor: {
      firstname: 'Daniel',
      lastname: 'Harper',
      email: 'daniel@graceharbor.example',
    },
    welcome_video: {
      url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    },
  },
  {
    id: 2,
    account_id: 2,
    slug: 'hope-city-fellowship',
    name: 'Hope City Fellowship',
    address: '84 Park Row',
    city: 'Richmond',
    state: 'VA',
    zipcode: '23220',
    country: 'USA',
    latitude: 37.5407,
    longitude: -77.436,
    phone: '(804) 555-0191',
    cell_phone: '(804) 555-0191',
    distance: 6.7,
    contact_email: 'connect@hopecity.example',
    profile_website: 'hopecity.example',
    profile_cover_art: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80',
    profile_headshot: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    profile_description: '<p>Hope City Fellowship serves Richmond through neighborhood discipleship, hospitality, and clear gospel teaching.</p>',
    profile_service_times: 'Sunday Worship:<br/>10:00 AM<br/>Community Night:<br/>6:00 PM',
    pastor: {
      firstname: 'Rachel',
      lastname: 'Owens',
      email: 'rachel@hopecity.example',
    },
    welcome_video: {
      url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    },
  },
  {
    id: 3,
    account_id: 3,
    slug: 'cornerstone-community',
    name: 'Cornerstone Community Church',
    address: '915 Oak Street',
    city: 'Charlotte',
    state: 'NC',
    zipcode: '28202',
    country: 'USA',
    latitude: 35.2271,
    longitude: -80.8431,
    phone: '(704) 555-0130',
    cell_phone: '(704) 555-0130',
    distance: 4.1,
    contact_email: 'office@cornerstone.example',
    profile_website: 'cornerstone.example',
    profile_cover_art: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=80',
    profile_headshot: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    profile_description: '<p>Cornerstone Community Church is a city-centered church family committed to discipleship, outreach, and prayer.</p>',
    profile_service_times: 'Sunday Service:<br/>10:30 AM',
    pastor: {
      firstname: 'Marcus',
      lastname: 'Lee',
      email: 'marcus@cornerstone.example',
    },
    welcome_video: {
      url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    },
  },
]

export const churchAccounts = locations.map((location) => ({
  ...location,
  id: location.account_id,
}))
