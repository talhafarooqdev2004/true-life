<template>
  <main class="min-h-screen bg-white font-sans">
    <RedesignTopNav @go="goTo" />
    <section
      class="h-[470px] border-b border-white bg-[#141F2F] bg-[radial-gradient(circle_at_top_left,_#182438_0%,_#141F2F_55%,_#121B29_100%)] px-[30px] pt-[28px] text-white"
    >
      <div
        class="mx-auto w-full max-w-[1120px] lg:flex lg:items-start lg:justify-between"
      >
        <div>
          <nav
            aria-label="Breadcrumb"
            class="flex items-center gap-[12px] text-[14px] font-normal leading-[18px] text-[#9AA4B3]"
          >
            <NuxtLink to="/" class="text-[#9AA4B3]">Home</NuxtLink>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mt-[1px] shrink-0"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#9AA4B3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <NuxtLink to="/topics/god" class="text-[#9AA4B3]">Topics</NuxtLink>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mt-[1px] shrink-0"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#9AA4B3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="text-white">God</span>
          </nav>

          <div
            class="mt-[22px] inline-flex h-[39px] items-center justify-center rounded-full border border-[#42663E] bg-[#2A4635] px-[17px] text-[14px] font-bold uppercase leading-none text-[#8BD14D]"
          >
            Featured Topic
          </div>

          <h1
            class="mt-[19px] text-[38px] font-extrabold leading-[46px] tracking-[-0.7px] text-white"
          >
            God
          </h1>

          <p
            class="mt-[13px] max-w-[330px] text-[18px] font-normal leading-[29px] text-[#D3D8E0]"
          >
            Exploring the existence, nature<br class="lg:hidden" />
            and character of God through<br class="lg:hidden" />
            biblical teaching and compelling<br class="lg:hidden" />
            evidence
          </p>

          <div
            class="mt-[12px] flex items-center gap-[24px] text-[14px] font-normal leading-[20px] text-[#9AA4B3]"
          >
            <div class="flex items-center gap-[10px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="shrink-0"
              >
                <path
                  d="M8 14.0007C11.314 14.0007 14.0007 11.314 14.0007 8C14.0007 4.686 11.314 1.99933 8 1.99933C4.686 1.99933 1.99933 4.686 1.99933 8C1.99933 11.314 4.686 14.0007 8 14.0007Z"
                  stroke="#9AA4B3"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 4.66602V7.99935L10 9.33268"
                  stroke="#9AA4B3"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>15 min read</span>
            </div>

            <div class="flex items-center gap-[10px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="shrink-0"
              >
                <path
                  d="M1.33398 8.00065C1.33398 8.00065 3.66732 3.33398 8.00065 3.33398C12.334 3.33398 14.6673 8.00065 14.6673 8.00065C14.6673 8.00065 12.334 12.6673 8.00065 12.6673C3.66732 12.6673 1.33398 8.00065 1.33398 8.00065Z"
                  stroke="#9AA4B3"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                  stroke="#9AA4B3"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>5.2M views</span>
            </div>
          </div>

          <div
            class="mt-[24px] flex items-center gap-[10px] text-[14px] font-normal leading-[20px] text-[#9AA4B3]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="shrink-0"
            >
              <path
                d="M8.00065 7.33333C9.47341 7.33333 10.6673 6.13943 10.6673 4.66667C10.6673 3.19391 9.47341 2 8.00065 2C6.52789 2 5.33398 3.19391 5.33398 4.66667C5.33398 6.13943 6.52789 7.33333 8.00065 7.33333Z"
                stroke="#9AA4B3"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6673 14V12.6667C12.6673 11.9594 12.3864 11.2811 11.8863 10.781C11.3862 10.281 10.7079 10 10.0007 10H6.00065C5.29341 10 4.61513 10.281 4.11503 10.781C3.61494 11.2811 3.33398 11.9594 3.33398 12.6667V14"
                stroke="#9AA4B3"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Updated March 2024</span>
          </div>
        </div>

        <div class="mt-[27px] flex items-center gap-[13px] lg:mt-[145px]">
          <button
            type="button"
            aria-label="Save topic"
            class="flex h-[46px] w-[46px] items-center justify-center rounded-[9px] border border-[#566274] bg-white/[0.09] text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 15.75L9 12.75L4.5 15.75V3.75C4.5 3.35218 4.65804 2.97064 4.93934 2.68934C5.22064 2.40804 5.60218 2.25 6 2.25H12C12.3978 2.25 12.7794 2.40804 13.0607 2.68934C13.342 2.97064 13.5 3.35218 13.5 3.75V15.75Z"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Share topic"
            class="flex h-[46px] w-[46px] items-center justify-center rounded-[9px] border border-[#566274] bg-white/[0.09] text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 6C14.7426 6 15.75 4.99264 15.75 3.75C15.75 2.50736 14.7426 1.5 13.5 1.5C12.2574 1.5 11.25 2.50736 11.25 3.75C11.25 4.99264 12.2574 6 13.5 6Z"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.5 11.25C5.74264 11.25 6.75 10.2426 6.75 9C6.75 7.75736 5.74264 6.75 4.5 6.75C3.25736 6.75 2.25 7.75736 2.25 9C2.25 10.2426 3.25736 11.25 4.5 11.25Z"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 16.5C14.7426 16.5 15.75 15.4926 15.75 14.25C15.75 13.0074 14.7426 12 13.5 12C12.2574 12 11.25 13.0074 11.25 14.25C11.25 15.4926 12.2574 16.5 13.5 16.5Z"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.44336 10.1328L11.5634 13.1178"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5559 4.88281L6.44336 7.86781"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <section
      class="bg-white px-[30px] pb-[32px] pt-[20px] lg:px-0 lg:py-[56px]"
    >
      <div
        class="mx-auto w-full max-w-[1120px] lg:grid lg:grid-cols-[1fr_340px] lg:items-start lg:gap-[20px]"
      >
        <div>
          <TopicContentRenderer :blocks="topicBlocks" />
          <TopicAuthorCard
            :author="topicAuthor"
            class="mt-[24px] hidden lg:block"
          />
        </div>
        <TopicSidebar
          :author="topicAuthor"
          :contents="topicContents"
          :related-topics="relatedTopics"
        />
      </div>
    </section>
    <RedesignFooter />
  </main>
</template>

<script setup>
import RedesignFooter from "~/homepage-redesign/components/RedesignFooter.vue";
import RedesignTopNav from "~/homepage-redesign/components/RedesignTopNav.vue";
const topicBlocks = [
  {
    type: "paragraphs",
    id: "introduction",
    items: [
      "The question of God's existence is perhaps the most important question anyone can ask. If God exists, then understanding His nature and relating to Him becomes paramount to our existence. If He doesn't exist, then we must look elsewhere for meaning, purpose, and moral direction in life.",
      "Throughout history, people from all cultures and backgrounds have recognized the existence of a higher power. The biblical God is not just any deity, but the personal, loving Creator who has revealed Himself through creation, Scripture, and ultimately through Jesus Christ.",
    ],
  },
  {
    type: "quote",
    variant: "green",
    quote:
      "The heavens declare the glory of God; the skies proclaim the work of his hands. Day after day they pour forth speech; night after night they reveal knowledge.",
    source: "Psalm 19:1-2 (NIV)",
  },
  {
    type: "section",
    id: "does-god-exist",
    title: "Does God Exist?",
    body: [
      "The existence of God can be approached from multiple angles: philosophical reasoning, scientific evidence, historical testimony, and personal experience. While absolute proof remains elusive (as faith requires), the cumulative evidence points strongly toward an intelligent Creator.",
    ],
  },
  {
    type: "subsection",
    title: "The Cosmological Argument",
    body: [
      "Everything that begins to exist has a cause. The universe began to exist (as evidenced by the Big Bang). Therefore, the universe has a cause. This cause must be timeless, spaceless, immaterial, and incredibly powerful—attributes that align with the concept of God. The cosmological argument has been refined over centuries, from ancient philosophers to modern physicists, and remains one of the most compelling rational arguments for God's existence.",
    ],
  },
  {
    type: "subsection",
    title: "The Teleological Argument (Design)",
    body: [
      "The universe exhibits extraordinary fine-tuning. Constants like gravitational force, electromagnetic force, and the cosmological constant are precisely calibrated to allow life. The probability of this happening by chance is astronomically small. This fine-tuning suggests an intelligent Designer who intended for life to exist. From the complexity of DNA to the precise distance of Earth from the Sun, design is evident throughout creation.",
    ],
  },
  {
    type: "subsection",
    title: "The Moral Argument",
    body: [
      'Human beings possess an innate sense of right and wrong. This universal moral law suggests a moral Lawgiver. Objective moral values (like "murder is wrong") transcend cultural differences and personal opinions, pointing to a transcendent source of morality. Without God, morality becomes merely subjective preference, yet we all recognize that some things are truly right or wrong regardless of opinion.',
    ],
  },
  {
    type: "section",
    id: "the-nature-of-god",
    title: "The Nature of God",
    body: [
      "The Bible reveals God as possessing several essential attributes that define His nature. Understanding these characteristics helps us comprehend who God is and how He relates to His creation.",
    ],
  },
  {
    type: "cards",
    items: [
      {
        variant: "blue",
        title: "Omnipotent (All-Powerful)",
        text: "God possesses unlimited power and can do anything consistent with His nature. Nothing is impossible for Him.",
      },
      {
        variant: "purple",
        title: "Omniscient (All-Knowing)",
        text: "God knows all things—past, present, and future. His knowledge is complete and perfect.",
      },
      {
        variant: "green",
        title: "Omnipresent (Ever-Present)",
        text: "God is present everywhere simultaneously. There is no place where God is not.",
      },
      {
        variant: "red",
        title: "Eternal & Unchanging",
        text: "God exists outside of time and never changes. He is the same yesterday, today, and forever.",
      },
    ],
  },
  {
    type: "paragraphs",
    items: [
      'Beyond these "omni" attributes, God is also described as holy (morally perfect and set apart), just (fair and righteous in all His dealings), and loving (demonstrating unconditional care for His creation). These attributes work together in perfect harmony.',
    ],
  },
  {
    type: "section",
    id: "knowing-god-personally",
    title: "Knowing God Personally",
    body: [
      "The wonderful truth of Christianity is that God desires a personal relationship with each of us. This isn't about religious ritual or earning favor through good works. It's about responding to God's initiative of love and grace toward humanity.",
    ],
  },
  {
    type: "subsection",
    title: "God's Revelation Through Jesus",
    body: [
      "Jesus Christ is the ultimate revelation of God's nature. In John 14:9, Jesus says, \"Anyone who has seen me has seen the Father.\" Through Jesus, we see God's love, compassion, justice, and mercy displayed in human form. Jesus' life, death, and resurrection demonstrate God's commitment to reconciling humanity to Himself.",
    ],
  },
  {
    type: "quote",
    variant: "blue",
    quote:
      "Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent.",
    source: "John 17:3 (NIV)",
  },
  {
    type: "subsection",
    title: "The Path to Relationship",
    body: [
      "Knowing God begins with acknowledging our need for Him. The Bible teaches that sin separates us from God, but through faith in Jesus Christ, that barrier is removed. This isn't about perfection—it's about direction and surrender. When we place our trust in Christ, we enter into a relationship with God that transforms our lives from the inside out.",
    ],
  },
  {
    type: "steps",
    items: [
      {
        number: 1,
        title: "Recognize Your Need",
        text: "Acknowledge that you need God and cannot save yourself through your own efforts.",
      },
      {
        number: 2,
        title: "Believe in Jesus",
        text: "Trust that Jesus died for your sins and rose again, offering you forgiveness and new life.",
      },
      {
        number: 3,
        title: "Surrender Your Life",
        text: "Invite God to be Lord of your life, committing to follow Him and His ways.",
      },
      {
        number: 4,
        title: "Grow in Relationship",
        text: "Develop your relationship through prayer, Bible study, fellowship, and obedience.",
      },
    ],
  },
  {
    type: "section",
    id: "gods-character",
    title: "God's Character: Love, Justice, and Mercy",
    body: [
      "Understanding God's character requires examining how His attributes work together in perfect harmony. God is not love at the expense of justice, nor just without mercy. He embodies all His attributes perfectly and simultaneously.",
    ],
  },
  {
    type: "subsection",
    title: "God is Love",
    body: [
      "First John 4:8 declares that \"God is love.\" This isn't just something God does—it's who He is. God's love is unconditional, sacrificial, and eternal. He loved us before we loved Him, even while we were His enemies. The cross demonstrates the depth of God's love: He gave His only Son so that we might have eternal life.",
    ],
  },
  {
    type: "subsection",
    title: "God is Just",
    body: [
      "God's justice means He always does what is right and fair. Sin cannot go unpunished because God is perfectly holy and just. This creates a dilemma: How can a just God forgive sinners? The answer lies in the cross, where Jesus bore the punishment for our sins, satisfying both God's justice and His love.",
    ],
  },
  {
    type: "subsection",
    title: "God is Merciful",
    body: [
      'Mercy is not getting what we deserve. While justice demands punishment for sin, God\'s mercy offers forgiveness. Ephesians 2:4-5 says, "But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions." God delights in showing mercy to those who turn to Him.',
    ],
  },
  {
    type: "section",
    id: "evidence-and-proof",
    title: "Evidence and Proof",
    body: [
      "While faith is essential, it need not be blind. Christianity is built on historical events and reasonable evidence. The resurrection of Jesus, the reliability of Scripture, and transformed lives throughout history all point to the reality of God.",
    ],
  },
  {
    type: "subsection",
    title: "Historical Evidence",
    body: [
      "The historical evidence for Jesus' life, death, and resurrection is substantial. Ancient historians like Josephus and Tacitus mention Jesus. The rapid spread of Christianity despite severe persecution suggests something extraordinary happened. The empty tomb and the transformation of the disciples from fearful followers to bold witnesses provide compelling evidence for the resurrection.",
    ],
  },
  {
    type: "subsection",
    title: "Changed Lives",
    body: [
      "Perhaps the most powerful evidence is the countless lives that have been transformed by encountering God. Former addicts finding freedom, broken relationships restored, purpose discovered in meaningless lives—these testimonies span cultures and centuries, providing experiential evidence of God's reality and power.",
    ],
  },
  {
    type: "section",
    id: "building-a-relationship",
    title: "Building a Relationship with God",
    body: [
      "Once you've entered into a relationship with God through faith in Christ, the journey of knowing Him more deeply begins. This is a lifelong process of growth, discovery, and transformation.",
    ],
  },
  {
    type: "subsection",
    title: "Prayer: Communication with God",
    body: [
      "Prayer is simply talking with God. It can be formal or informal, scripted or spontaneous. Through prayer, we express our gratitude, share our concerns, seek guidance, and simply enjoy God's presence. God invites us to approach Him boldly and honestly, as a child approaches a loving father.",
    ],
  },
  {
    type: "subsection",
    title: "Scripture: God's Word",
    body: [
      "The Bible is God's primary means of speaking to us today. Through Scripture, we learn about God's character, His plans, and His ways. Regular Bible reading transforms our minds and shapes our understanding of God and ourselves. As we read, the Holy Spirit illuminates the text, making it personally relevant and applicable.",
    ],
  },
  {
    type: "subsection",
    title: "Community: Fellowship with Believers",
    body: [
      "God designed us for community. Connecting with other believers provides encouragement, accountability, and opportunities to serve. The church isn't a building but a family of believers who support one another in the journey of faith. Together, we can know God more fully than we ever could alone.",
    ],
  },
  {
    type: "cta",
    title: "Ready to Take the Next Step?",
    text: "Knowing God is the greatest adventure of life. Whether you're just beginning to explore faith or desire to deepen your existing relationship with God, resources are available to help you on this journey.",
    primaryLabel: "Explore More Resources",
    secondaryLabel: "Connect with Us",
  },
];

const topicAuthor = {
  initials: "TL",
  name: "TrueLife Team",
  bio: "This comprehensive guide to understanding God has been carefully researched and compiled by our team of theologians and Christian educators.",
  updated: "March 2024",
  views: "5.2M views",
};

const topicContents = [
  { label: "Introduction", href: "#introduction" },
  { label: "Does God Exist?", href: "#does-god-exist", active: true },
  { label: "The Nature of God", href: "#the-nature-of-god" },
  { label: "Knowing God Personally", href: "#knowing-god-personally" },
  { label: "God's Character", href: "#gods-character" },
  { label: "Evidence & Proof", href: "#evidence-and-proof" },
  { label: "Building a Relationship", href: "#building-a-relationship" },
];

const relatedTopics = [
  {
    title: "Jesus Christ",
    href: "/topics/jesus-christ",
    image: "/video-library/thumb-0.jpg",
  },
  {
    title: "The Bible",
    href: "/topics/the-bible",
    image: "/video-library/thumb-1.jpg",
  },
  {
    title: "Christianity",
    href: "/topics/christianity",
    image: "/video-library/thumb-2.jpg",
  },
];
</script>
