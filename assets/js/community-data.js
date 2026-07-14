/**
 * ============================================================
 * COMMUNITY CONTRIBUTIONS DATA
 * ============================================================
 *
 * HOW TO ADD A NEW CONTRIBUTION:
 *
 * 1. Find the correct category array below:
 *    - articles   --> For published articles/tutorials
 *    - speaking   --> For talks, conferences, bootcamps, events
 *    - projects   --> For open source projects and apps
 *    - recognition --> For awards, mentorships, certifications, judging
 *
 * 2. Copy the template below and paste it inside the array:
 *
 *    {
 *      title: "Your Title Here",
 *      desc: "A short description of the contribution.",
 *      org: "Organizer Name",
 *      loc: "City, Country",
 *      badge: "Article",  // or "Event", "Conference", "Bootcamp", "Recognition", etc.
 *      images: [
 *        "https://your-image-url-1.png",
 *        "https://your-image-url-2.png"   // Add more images if needed
 *      ],
 *      links: [
 *        "https://your-main-link.com",
 *        "https://youtube.com/watch?v=xyz" // Add more links if needed
 *      ]
 *    },
 *
 * 3. Save this file. The changes will appear on community.html.
 *
 * NOTES:
 *   - "images" is an ARRAY. Use ["url"] for one image, or ["url1", "url2"] for multiple.
 *   - "links" is an ARRAY. The first link is used as the primary "Learn More" button.
 *   - Always add a trailing comma after the closing } of each entry.
 *   - Keep entries in chronological order (newest first).
 *
 * ============================================================
 */

const communityData = {

  // ────────────────────────────────────────────────────────────
  // ARTICLES
  // ────────────────────────────────────────────────────────────
  articles: [
  {
    title: "How to Use Dart Dot Shorthands: A Handbook for Devs",
    desc: "Learn how Dart's dot shorthands simplify object creation, method chaining, null-aware operations, and collection handling. This handbook explains the syntax introduced in modern Dart, shows practical Flutter examples, and demonstrates how these features reduce boilerplate while making code more readable and maintainable.",
    org: "freeCodeCamp.org",
    loc: "Online (Article)",
    badge: "Article",
    images: [
      "https://cdn.hashnode.com/uploads/covers/5e1e335a7a1d3fcc59028c64/8db73615-1cb4-4408-80d2-634775c83382.png"
    ],
    links: [
      "https://www.freecodecamp.org/news/how-to-use-dart-dot-shorthands-handbook/"
    ]
  },
  {
    title: "How to Use Dart Cloud Functions and the Firebase Admin SDK: A Handbook for Developers",
    desc: "A practical guide to building server-side applications with Dart Cloud Functions and the Firebase Admin SDK. Learn how to create secure backend logic, authenticate users, manage Firestore, send notifications, and build scalable Firebase-powered services using Dart.",
    org: "freeCodeCamp.org",
    loc: "Online (Article)",
    badge: "Article",
    images: [
      "https://cdn.hashnode.com/uploads/covers/5fc16e412cae9c5b190b6cdd/faa7ab26-537d-47f6-ae20-c34c2efbf408.png"
    ],
    links: [
      "https://www.freecodecamp.org/news/how-to-use-dart-cloud-functions-and-the-firebase-admin-sdk/"
    ]
  },
  {
    title: "How to Build Production-Ready AI Features with Flutter",
    desc: "This comprehensive handbook shows how to integrate production-ready AI capabilities into Flutter applications. It covers structured outputs, prompt engineering, model management, streaming responses, safety considerations, and best practices for building reliable AI-powered mobile applications.",
    org: "freeCodeCamp.org",
    loc: "Online (Article)",
    badge: "Article",
    images: [
      "https://cdn.hashnode.com/uploads/covers/5e1e335a7a1d3fcc59028c64/ea972c9f-fc63-42c9-b3a3-641090afd81d.png"
    ],
    links: [
      "https://www.freecodecamp.org/news/how-to-build-production-ready-ai-features-with-flutter-handbook-for-devs/"
    ]
  },
  {
    title: "How to Use Mixins in Flutter",
    desc: "Learn how Flutter mixins promote reusable behavior across widgets and classes without relying on inheritance. This handbook explains when to use mixins, how they work under the hood, and demonstrates practical Flutter examples that improve code organization and maintainability.",
    org: "freeCodeCamp.org",
    loc: "Online (Article)",
    badge: "Article",
    images: [
      "https://cdn.hashnode.com/uploads/covers/5e1e335a7a1d3fcc59028c64/abc0d8f4-ff65-42b4-b029-446313c29595.png"
    ],
    links: [
      "https://www.freecodecamp.org/news/how-to-use-mixins-in-flutter-full-handbook/"
    ]
  },
  {
    title: "How to Use GraphQL in Flutter: A Handbook for Developers",
    desc: "A complete guide to integrating GraphQL into Flutter applications. You'll learn how GraphQL differs from REST, configure a GraphQL client, perform queries, mutations, and subscriptions, implement authentication, and build efficient data-driven Flutter applications.",
    org: "freeCodeCamp.org",
    loc: "Online (Article)",
    badge: "Article",
    images: [
      "https://cdn.hashnode.com/uploads/covers/5e1e335a7a1d3fcc59028c64/66d879b4-18e0-4ebd-9e36-320cdb9b1ac2.png"
    ],
    links: [
      "https://www.freecodecamp.org/news/how-to-use-graphql-in-flutter-a-handbook-for-developers/"
    ]
  },
  {
    title: "How to Build AI-Powered Flutter Applications with Genkit Dart",
    desc: "This handbook demonstrates how to build AI-powered Flutter applications using Genkit Dart. It walks through setting up AI workflows, integrating large language models, generating structured outputs, managing prompts, and creating production-ready AI experiences with modern Flutter architecture.",
    org: "freeCodeCamp.org",
    loc: "Online (Article)",
    badge: "Article",
    images: [
      "https://cdn.hashnode.com/uploads/covers/5e1e335a7a1d3fcc59028c64/c3469d7d-95f7-441e-a430-e2ee2968ebf5.png"
    ],
    links: [
      "https://www.freecodecamp.org/news/how-to-build-ai-powered-flutter-applications-with-genkit-dart-handbook-for-devs/"
    ]
  },
  {
    title: "Efficient State Management in Flutter Using IndexedStack",
    desc: "Learn how IndexedStack preserves widget state across navigation, making it ideal for bottom navigation bars and multi-tab Flutter applications. This guide explains why widget state is lost during navigation and shows how IndexedStack provides a simple, efficient solution with practical examples.",
    org: "freeCodeCamp.org",
    loc: "Online (Article)",
    badge: "Article",
    images: [
      "https://cdn.hashnode.com/uploads/covers/5e1e335a7a1d3fcc59028c64/9c382ab1-3193-400e-84a1-b59e95081ad4.png"
    ],
    links: [
      "https://www.freecodecamp.org/news/efficient-state-management-in-flutter-using-indexedstack/"
    ]
  },
  {
    title: "Learn How AI Agents Are Changing Software Development by Building a Flutter App Using Antigravity and Stitch",
    desc: "Discover how AI agents are transforming modern software development by building a Flutter application with Antigravity and Stitch. This tutorial explores agentic workflows, AI-assisted development, prompt-driven engineering, and practical techniques for creating intelligent developer experiences.",
    org: "freeCodeCamp.org",
    loc: "Online (Article)",
    badge: "Article",
    images: [
      "https://cdn.hashnode.com/uploads/covers/5e1e335a7a1d3fcc59028c64/884f5ad2-55e8-479e-aa2c-1d742d8ff922.png"
    ],
    links: [
      "https://www.freecodecamp.org/news/learn-how-ai-agents-are-changing-development-by-building-a-flutter-app/"
    ]
  },

    {
      title: "How to Use Monorepos in Flutter",
      desc: "This article provides a practical, production-focused guide to structuring, building, and maintaining a Flutter monorepo using a real-world ride-hailing platform as a case study. We'll cover how to organize a monorepo that powers a Rider mobile app, a Driver mobile app, and a Web Admin dashboard, explore how shared packages work in Dart and Flutter, and examine where Melos and Dart Workspaces fit into modern Flutter development. Along the way, you'll learn how these tools complement each other in real production setups.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1770235068471/a9293936-4807-4338-888f-2bfe12e79238.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-use-monorepos-in-flutter"
      ]
    },

    {
      title: "How to Add Multi-Language Support in Flutter: Manual and AI-Automated Translations for Flutter Apps",
      desc: "This article provides a comprehensive, production-focused guide to supporting multiple languages in a Flutter application using Flutter's localization system, the intl package, and Bloc for state management. We'll support English, French, and Spanish, implement automatic language detection, and allow users to manually switch languages from settings, while also exploring the use of AI to automate text translations.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1769823409815/68f43b90-d3a1-41b6-8f57-2480b5603aa8.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-add-multi-language-support-in-flutter-manual-and-ai-automated-translations-for-flutter-apps/"
      ]
    },

    {
      title: "Decoupling Material and Cupertino in Flutter: Why It Matters and How to Adapt",
      desc: "This article takes a clear, engineering-focused look at Flutter's ongoing Decoupling Design initiative and why it matters as the framework scales beyond mobile. It explains how Flutter's historically tight coupling between core widgets and Material and Cupertino became a productivity win and later an architectural constraint, then dives into the dependency and design system challenges that emerged with multi-platform support.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1768633540431/50bcbbde-1e59-4d91-87ab-43e828ff4628.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/decoupling-material-and-cupertino-in-flutter/"
      ]
    },

    {
      title: "How to Not Be Overwhelmed by AI - A Developer's Guide to Using AI Tools Effectively",
      desc: "This publication takes a grounded look at how AI fits into real-world software engineering, focusing on productivity without sacrificing judgment or control. It discusses the risks of blindly accepting AI-generated code, the growing expectation for engineers to use AI effectively in assessments, and the mental models required to avoid subtle, hard-to-catch errors. It also examines the current AI tooling landscape and demonstrates how these practices come together in a practical Flutter development workflow.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1767888824177/0ff30c72-ea78-4dca-a32a-a3d8ab07ed9d.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-not-be-overwhelmed-by-ai/"
      ]
    },

    {
      title: "How to Use GenUI in Flutter to Build Dynamic, AI-Driven Interfaces",
      desc: "Generative UI (GenUI) rethinks traditional static interfaces by allowing AI to generate Flutter widgets dynamically at runtime. This guide demonstrates how to build an AI-powered Christmas Card Generator using Google's Generative UI SDK and Gemini, where personalized, production-ready Flutter UIs are created from simple user inputs like name, relationship, and color preference.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1766509548239/99297b93-71af-47aa-b9a4-907b14b8d862.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-use-genui-in-flutter-to-build-dynamic-ai-driven-interfaces/"
      ]
    },

    {
      title: "Theming and Customization in Flutter: A Handbook for Developers",
      desc: "This article is a practical, engineering-focused guide to building a scalable and consistent design system in Flutter using theming. It explains why design in product engineering goes far beyond aesthetics, shaping how an experience feels, how users interact with it, and how a brand shows up across every screen. The guide breaks down Flutter's theming capabilities from the fundamentals of Material 3 ColorSchemes and typography to advanced techniques like custom ThemeExtensions, reusable style layers, component-level overrides, runtime theme switching, and cross-platform responsiveness.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764176168303/0a4639a6-a472-4361-af11-095c694a32d5.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/theming-and-customization-in-flutter/"
      ]
    },

    {
      title: "How to Use Streams in Flutter",
      desc: "This article is a comprehensive guide to asynchronous programming with Streams in Flutter and Dart. It demystifies the core concepts of streams: a sequence of asynchronous events, and explains why they are crucial for building highly responsive UIs and handling continuous data flows (like real-time updates or continuous user input). The guide covers key components such as StreamController, StreamBuilder (for UI integration), and StreamSubscription, and provides practical examples, including transforming streams and implementing advanced features like debouncing a search field.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1761776021283/895ec285-e065-47d0-adcd-6cf37f550308.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-use-streams-in-flutter/"
      ]
    },

    {
      title: "How to Manage Assets in Flutter using flutter_gen",
      desc: "The article provides a detailed guide on using the flutter_gen package to automate asset management in Flutter projects. It explains how this package eliminates runtime errors caused by typos, improves code maintainability, and provides type safety for assets (like images, icons, and fonts). The guide includes step-by-step instructions for setting up the project, organizing assets, running code generation using build_runner, and referencing the generated, type-safe asset classes in your Flutter code.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1761684709918/970dc703-bfee-45b3-8e79-ab945f6cca08.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-manage-assets-in-flutter-using-fluttergen/"
      ]
    },

    {
      title: "How to Build Responsive UIs in Flutter",
      desc: "This article is a comprehensive guide on building responsive UIs in Flutter that look great on phones, tablets, and desktops without maintaining multiple layouts. It explains the core concepts of responsive vs. adaptive design and details how to use powerful Flutter tools like MediaQuery, LayoutBuilder, and the external flutter_screenutil package.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1761675616710/b66a3df2-011e-46fd-83fa-e46b0f4b951b.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-build-responsive-uis-in-flutter/"
      ]
    },

    {
      title: "How to Use the Model Context Protocol (MCP) with Flutter and Dart",
      desc: "The article is a guide explaining the Model Context Protocol (MCP), a standard that allows AI models (agents) to communicate in a structured, consistent way with developer tools, editors, and Dart/Flutter projects. It details what MCP is, why it's important for Dart and Flutter developers in the context of AI-assisted workflows, and provides practical examples on how to build or integrate MCP-based tools using the official dart_mcp package.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1761373250474/614c6467-4aea-464c-ac4e-e8f335511fa9.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-use-the-model-context-protocol-mcp-with-flutter-and-dart/"
      ]
    },

    {
      title: "How to Build Scalable and Performant Flutter Applications: A Handbook for Devs",
      desc: "Flutter has rapidly become one of the most popular frameworks for building cross-platform applications. This article walks through the fundamental best practices for building scalable and performant Flutter applications, covering architectural best practices, performance optimization, and efficient state management.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1761114641508/9f609dc0-7592-4028-97e3-64bcf5b9c8ff.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-build-scalable-and-performant-flutter-applications-a-handbook-for-devs/"
      ]
    },

    {
      title: "How to Use Freezed in Flutter",
      desc: "A tutorial explaining how to use the Freezed package in Flutter to generate boilerplate code for immutable data classes, JSON serialization, and unions, reducing manual coding and improving code maintainability.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1759758497400/b697228e-047a-4980-ac71-d120054f5324.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-use-freezed-in-flutter/"
      ]
    },

    {
      title: "How to Use Animations in Flutter",
      desc: "A comprehensive guide on using animations in Flutter, covering implicit, explicit, physics-based, hero, staggered, and sequence animations. It includes practical examples, best practices, and tips for creating engaging and performant user interfaces.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1759517063966/895fc020-42e2-4744-8eb1-3ca7e247d577.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-use-animations-in-flutter/"
      ]
    },

    {
      title: "How to Implement the SOLID Principles in Flutter and Dart",
      desc: "An explanation of the SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion) with practical Flutter/Dart code examples. The article breaks down each principle, explains its meaning, and demonstrates how to apply it in Flutter projects.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1759322302584/a1dea2e6-1e54-4a74-8929-41411770c4a8.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/implement-the-solid-principles-in-flutter-and-dart/"
      ]
    },

    {
      title: "Learn Flutter Hooks - Common Hooks Explained with Code Examples",
      desc: "A guide explaining Flutter hooks, their benefits, and common hooks like useState, useAnimationController, useEffect, useMemoized, useRef, useCallback, useContext, and useTextEditingController with code examples. It also covers creating custom hooks and best practices.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1758954961528/cfed482a-e995-4440-b1b7-febace5b5571.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/learn-flutter-hooks-with-code-examples/"
      ]
    },

    {
      title: "How to Store Data Locally with Isar in Flutter",
      desc: "This article explains how to use Isar, a high-performance NoSQL embedded database, in Flutter applications for efficient local data management. It covers integrating Isar into a Flutter project, setting up a data model, and performing CRUD (Create, Read, Update, Delete) operations by building a simple to-do app. The article also touches on advanced Isar features like reactive queries, indexes, and relations.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1758287939407/e557cfd7-d893-4cc9-92af-0b97f53b78bf.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/store-data-locally-with-isar-in-flutter/"
      ]
    },

    {
      title: "How to Use ObjectBox in Flutter",
      desc: "A guide on integrating ObjectBox, a high-performance NoSQL embedded database, into a Flutter project. It covers setting up the project, initializing ObjectBox, creating data models, implementing CRUD operations (Create, Read, Update, Delete), and integrating these operations with a Flutter UI. Advanced features like reactive queries, indexing, relationships, custom queries, migrations, and transactions are also discussed.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1758044816521/f0e2a39d-33a0-424c-b00f-0bf5ceabc372.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-use-objectbox-in-flutter/"
      ]
    },

    {
      title: "How to Store Data Locally Using Hive in Flutter",
      desc: "A Flutter application demonstrating CRUD operations using Hive for local data storage. Hive is a lightweight, fast key-value database written in pure Dart, suitable for storing app preferences, managing lists of structured data, offline caching, and storing session/user profile data. The tutorial covers project setup, folder structure, and implementation details, including model creation, controller logic, UI design, and state management.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1757429077577/b2068863-1b4c-4326-9e47-925d24bc917a.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-store-data-locally-using-hive-in-flutter/"
      ]
    },

    {
      title: "How to Get Started With Navigation in Flutter Using AutoRoute",
      desc: "A guide on implementing navigation in Flutter using the AutoRoute package. It covers setting up the project, organizing the project structure, defining routes, generating route files, setting up AutoRoute in main.dart, creating screens, and using a control screen for navigation. It emphasizes strongly typed routes and a clean project structure for scalability.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1757342341619/637fc1e7-f499-468a-bd72-7b0ebd6cbb7c.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-get-started-with-navigation-in-flutter-using-autoroute/"
      ]
    },

    {
      title: "How to Build an Upload Service in Flutter Web with Firebase",
      desc: "A tutorial on building a reusable upload service in Flutter Web using Firebase Storage. The service allows uploading single and multiple files, returns download URLs, and uses Dependency Injection (DI) with injectable for modularity, testability, and maintainability. It covers defining the data model, implementing the service, handling errors, and using the service in a Flutter Web project.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1757130747151/e490501b-a31b-43c4-a0b0-95a91df5b579.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-build-an-upload-service-in-flutter-web-with-firebase/"
      ]
    },

    {
      title: "How to Get Started With GoRouter in Flutter",
      desc: "This article provides a comprehensive guide to using the go_router package in Flutter for simplified and feature-rich navigation. It covers installation, route definition, navigation between screens, parameter passing (query and path parameters), sub-routes, ShellRoute, redirection, and guards. It also includes a practical example of building a minimalistic shopping application with product listing, details, and purchase screens.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1756949082812/fd9b5217-bcd1-4ed7-9b01-ca36c57536d5.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-get-started-with-gorouter-in-flutter/"
      ]
    },

    {
      title: "How to Save and Share Flutter Widgets as Images - A Complete Production-Ready Guide",
      desc: "A comprehensive guide on capturing Flutter widgets as images, saving them to the device's gallery, and sharing them via the native share sheet. It covers the necessary dependencies, platform configurations, and code implementations for achieving this functionality in a production-ready Flutter application.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1756884587618/40cc54de-253f-4614-b104-bc0261adc27f.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-save-and-share-flutter-widgets-as-images-a-complete-production-ready-guide/"
      ]
    },

    {
      title: "How to Handle Permissions in Flutter: A Comprehensive Guide",
      desc: "This content is about managing permissions in Flutter mobile applications. It explains why permissions (like location, camera, contacts, microphone, and storage) are important, emphasizes the need to handle them properly for user experience, privacy, and security, and introduces the permission_handler package as a key tool.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1756312171830/9c6d8d5e-e0b4-486a-be17-90a104421d63.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-handle-permissions-in-flutter-for-beginners/"
      ]
    },

    {
      title: "How to Automate Flutter Testing and Builds with GitHub Actions for Android and iOS",
      desc: "This guide will walk you through setting up GitHub Actions for a Flutter project, covering everything from prerequisites to detailed explanations of the workflow.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1755824310738/8c232c96-7a61-4313-8dbb-ab35893f2c3c.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-automate-flutter-testing-and-builds-with-github-actions-for-android-and-ios/"
      ]
    },

    {
      title: "How to Set Up Firebase Crashlytics in a Flutter App (iOS and Android)",
      desc: "In this article, we'll walk through setting up Firebase Crashlytics in a Flutter app for both iOS and Android platforms. Along the way, you'll learn not only how to integrate Crashlytics, but also the reasoning behind each step, so you fully understand how it works.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1755736022850/285e6675-fb6d-4ba9-97bf-342998392861.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-set-up-firebase-crashlytics-in-a-flutter-app-ios-and-android/"
      ]
    },

    {
      title: "How to Deploy a Flutter Web App to Firebase Hosting with GitHub Actions",
      desc: "This guide walks you through setting up Firebase Hosting, configuring GitHub Actions, and managing deployments. By the end, you'll have a reliable CI/CD pipeline for your Flutter web project.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1755709092744/cefbb850-0901-480b-a574-343c9bd52b38.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-deploy-a-flutter-web-app-to-firebase-hosting-with-github-actions/"
      ]
    },

    {
      title: "How to Build an Always Listening Network Connectivity Checker in Flutter using BLoC",
      desc: "A detailed walkthrough of building a comprehensive network connectivity checker in Flutter using connectivity_plus, internet_connection_checker, rxdart with debounce, Dependency Injection with get_it and injectable, State Management with BLoC and freezed, Streams, and fluttertoast. The article covers setting up dependency injection, implementing the network connectivity checker, creating the BLoC, integrating the BLoC with the UI, and displaying toast notifications.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1755539179817/dc17677b-b3c5-4ef0-84e3-fda096a5beaa.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-build-an-always-listening-network-connectivity-checker-in-flutter-using-bloc/"
      ]
    },

    {
      title: "How to Replicate Figma Designs in Flutter - A Guide to Pixel-Perfect UI Replication",
      desc: "This comprehensive guide provides actionable strategies and practical methods for developers. It covers the specific steps and considerations needed to bridge the gap between design files and functional code. By following the practices outlined here, you will be able to transform static Figma artboards into high-quality, fully functional Flutter UIs that exactly match the design specifications.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1754609174090/be7840fe-eef1-4383-b9a9-5d5d33a87ef7.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-replicate-figma-designs-in-flutter/"
      ]
    },

    {
      title: "How to Push Silent Updates in Flutter using Shorebird",
      desc: "This article will walk you through how to integrate and leverage Shorebird, a powerful code push service built specifically for Flutter applications. You'll learn how Shorebird enables over-the-air (OTA) updates, helping you deliver critical bug fixes and feature improvements instantly, without waiting for app store approvals.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1754066656398/7df60d53-371b-482b-9caa-0471bc417bdf.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-push-silent-updates-in-flutter-using-shorebird/"
      ]
    },

    {
      title: "How to Integrate Firebase into Your Flutter Applications: A Handbook for Developers",
      desc: "This article will give you a deep dive into integrating and leveraging a wide array of Firebase services within your Flutter applications. We'll explore the FlutterFire ecosystem, essential code snippets, and clarify how the Firebase Console serves as your primary management interface. You'll also learn about the evolving concept of Firebase Studio as an advanced development environment.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1753390655851/f6dc2bd2-0a78-4615-8e89-7f3b46ed19e5.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-integrate-firebase-into-your-flutter-applications-a-handbook-for-developers/"
      ]
    },

    {
      title: "How to Use Local Notifications in Flutter",
      desc: "Tutorial for creating, scheduling, and managing local notifications in Flutter applications with practical implementation details.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1751084951824/25295130-3797-451d-8945-32f15102654f.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-use-local-notifications-in-flutter/"
      ]
    },

    {
      title: "Routing and Multi-Screen Development in Flutter - Beginner's Guide",
      desc: "Guide on navigation and routing patterns for building multi-screen Flutter applications with clean architecture.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1751005160831/e5c73a6a-e01d-4316-a5c4-7f9e39e9f694.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/routing-and-multi-screen-development-in-flutter/"
      ]
    },

    {
      title: "How to Build an AI-Powered Cooking Assistant with Flutter and Gemini",
      desc: "Building AI-powered apps using Flutter and Google's Gemini model for intelligent cooking assistance with practical code examples.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712979873/4b037564-53da-418c-88e8-9e926d8c7566.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/build-an-ai-powered-cooking-assistant-with-flutter-and-gemini/"
      ]
    },

    {
      title: "How to Build a Medical Chatbot with Flutter and Gemini: A Beginner's Guide",
      desc: "This beginner's guide walks through building a specialized medical chatbot using Flutter and Google's Gemini API. The chatbot receives input from multiple modalities, including text, audio, camera, files, and a gallery, and is strictly confined to answering health-related questions.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749846485302/a3879c8e-9854-45d5-92c6-96cdf7b3ec8b.jpeg"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-build-a-medical-chatbot-with-flutter-and-gemini"
      ]
    },

    {
      title: "How to Secure Mobile APIs in Flutter",
      desc: "An article focusing on how to secure mobile APIs when building Flutter applications, covering common vulnerabilities and practical mitigation strategies.",
      org: "freeCodeCamp.org",
      loc: "Online (Article)",
      badge: "Article",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712986204/18c0ef46-d732-49f2-a8f6-d2e918431dbc.webp"
      ],
      links: [
        "https://www.freecodecamp.org/news/how-to-secure-mobile-apis-in-flutter/"
      ]
    },

  ],

  // ────────────────────────────────────────────────────────────
  // SPEAKING & EVENTS
  // ────────────────────────────────────────────────────────────
  speaking: [
     {
      title: "Build with AI 2026",
      desc: "A hands-on workshop exploring AI agent workflows in Flutter using Antigravity and Stitch to build intelligent, production-ready applications.",
      org: "GDG Surrey, Canada",
      loc: "Surrey, British Columbia Canada",
      badge: "Event",
      images: [
        "https://media.licdn.com/dms/image/v2/D5622AQH5F3M6V27WRw/feedshare-shrink_1280/B56Z39PFhcIoAM-/0/1778070083953?e=1785369600&v=beta&t=8tGAaimp0mMR-lvlZVteP04dPWpG8fEF9R_MMpP5HVs",
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-surrey-presents-building-flutter-apps-with-ai-agents-using-antigravity-amp-stitch-build-with-ai/",
        "https://www.youtube.com/watch?v=PhqmtvvHyvc"
      ]
    },

    {
      title: "Build with AI 2026 - AI Flutter Club | Week 4",
      desc: "In this session, we'll show Flutter developers how to integrate AI models like Google's Gemini and MedLM into health apps to enhance patient care. Using simple API calls, you can add powerful features such as symptom checkers, health inquiries, diagnosis assistance, and medical document recognition and analysis.",
      org: "GDG Ahlen, Germany",
      loc: "Ahlen, Germany",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1769834211596/7ad54bee-26e9-40ee-8731-226a51afbba8.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1769837320745/f8f13dea-78de-466f-bac3-41ae5598019a.png"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-ahlen-presents-build-with-ai-2026-ai-flutter-club-week-4-integrating-ai-into-flutter-apps-2026-01-30/",
        "https://www.youtube.com/watch?v=guCcNKBYhmM"
      ]
    },

    {
      title: "GDG Kigali DevFest 2025",
      desc: "This session shows how Firebase and Firebase Studio help teams build and scale mobile apps efficiently. It covers Firebase's core services, Firestore, Authentication, Cloud Functions, Storage, and Messaging, and explains how its serverless model supports everything from prototypes to production without heavy infrastructure management.",
      org: "GDG Kigali",
      loc: "Kigali, Rwanda",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1765910340614/9adac6a5-5998-4bcd-b8e7-bea0f4c64423.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-kigali-presents-devfest-kigali-2025/"
      ]
    },

    {
      title: "THE CREST 2.0 CONFERENCE",
      desc: "This masterclass focuses on how to build a global tech career regardless of location. It covers the essential skills needed to compete internationally, how to showcase your work on global platforms, and practical strategies for attracting remote and cross-border opportunities. The session also addresses common challenges faced by African professionals, such as limited exposure and access, and provides clear steps for overcoming them.",
      org: "Scholars Lens",
      loc: "Lagos, NG",
      badge: "Conference",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1765428069952/a7cfce9c-f1f8-4f7b-9d23-3f18d82bb25a.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764835926325/53552f59-a737-428d-81fd-b2ab68750df0.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764835934774/cffcb02f-b457-4d72-91e8-9df9489b231b.png"
      ],
      links: [
        "https://www.instagram.com/scholarslens_/?hl=en"
      ]
    },

    {
      title: "Ascend 2025",
      desc: "This session introduces the essentials of starting a mobile development career and building apps that perform well in real-world conditions. It outlines a beginner-friendly path for learning mobile development, highlights practical best practices for creating high-performance and user-focused apps, and explains how to design for challenges common in Nigeria, such as slow networks and offline usage.",
      org: "Softzenith",
      loc: "YouTube Live",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764080100998/e2b3b54f-fec1-46c5-9ceb-5923c1f373f6.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764259209298/ead0422a-d823-4df4-bc1f-bf339eade444.png"
      ],
      links: [
        "https://www.linkedin.com/events/howtostartmobiledevelopmentandb7399053930875334656/",
        "https://www.youtube.com/watch?v=4c6q3dATS64"
      ]
    },

    {
  title: "Google I/O Extended Lusaka 2026",
  desc: "A technical session at Google I/O Extended Lusaka exploring how Firebase and Firebase Studio enable teams to build and scale production-ready mobile applications. The talk covers Firestore, Authentication, Cloud Functions, Storage, Cloud Messaging, and demonstrates how Firebase Studio and Builder.io streamline visual app development from design to deployment.",
  org: "Google Developer Groups (GDG) Lusaka",
  loc: "Lusaka, Zambia",
  badge: "Talk",
  images: [
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1756321747572/90cb5b0f-c5cf-4abf-a63a-ad2577064684.png"
  ],
  links: [
    "https://gdg.community.dev/events/details/google-gdg-lusaka-presents-google-io-extended-lusaka/"
  ]
},

    {
      title: "GDG Ajah DevFest 2025",
      desc: "This session shows how Firebase and Firebase Studio help teams build and scale mobile apps efficiently. It covers Firebase's core services, Firestore, Authentication, Cloud Functions, Storage, and Messaging, and explains how its serverless model supports everything from prototypes to production without heavy infrastructure management.",
      org: "GDG Ajah",
      loc: "Ajah, Lagos, NG",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764068554203/73115ad7-33b0-47cb-aee5-f50d4d7189fa.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1765097784139/a4cd7ad0-34df-4ab6-95fd-1b55e450a667.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1765441754077/75d3b166-d752-467a-92d9-18f10ce3247a.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-ajah-presents-devfest-ajah-2025/"
      ]
    },

    {
      title: "GDG Ahlen DevFest 2025",
      desc: "This session shows how Firebase and Firebase Studio help teams build and scale mobile apps efficiently. It covers Firebase's core services, Firestore, Authentication, Cloud Functions, Storage, and Messaging, and explains how its serverless model supports everything from prototypes to production without heavy infrastructure management.",
      org: "GDG Ahlen",
      loc: "Ahlen, Germany",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1763015851678/9efdc543-df9b-4342-a7cf-84cc64ae4f9d.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-ahlen-presents-devfest-ahlen-2025/",
        "https://www.youtube.com/watch?v=YZ9HArENJBY"
      ]
    },

    {
      title: "GDG Surrey DevFest 2025",
      desc: "This session shows how Firebase and Firebase Studio help teams build and scale mobile apps efficiently. The session also explores Firebase Studio and Builder.io, demonstrating how teams can visually build apps, connect to Firebase, and even bring designs to life from Figma. Attendees will gain practical insights on combining these tools to develop flexible, cost-efficient, and production-ready applications.",
      org: "GDG Surrey",
      loc: "Surrey, British Columbia, Canada",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1762193794865/6176d77e-f07b-468b-9512-e41f286b1544.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-surrey-presents-gdg-surrey-devfest-2025-virtual-series-building-at-scale-using-firebase-and-firebase-studio-2025-11-05/",
        "https://www.youtube.com/watch?v=1kO365eGeMc"
      ]
    },

    {
      title: "GDG Pretoria DevFest 2025",
      desc: "This session shows how Firebase and Firebase Studio help teams build and scale mobile apps efficiently. It covers Firebase's core services, Firestore, Authentication, Cloud Functions, Storage, and Messaging, and explains how its serverless model supports everything from prototypes to production without heavy infrastructure management.",
      org: "GDG Pretoria",
      loc: "Pretoria, South Africa",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1762950831431/e0bab5f2-8697-43f3-ad1d-f8f27df0b0b9.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-pretoria-presents-devfest-pretoria-2025-building-safe-secure-and-scalable-solutions-with-ai-and-cloud/"
      ]
    },

    {
      title: "DevFest Umuahia 2025",
      desc: "This session shows how Firebase and Firebase Studio help teams build and scale mobile apps efficiently. The session also explores Firebase Studio and Builder.io, demonstrating how teams can visually build apps, connect to Firebase, and even bring designs to life from Figma.",
      org: "GDG Umuahia",
      loc: "Umuahia, Nigeria",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1760551450506/e480732d-9d11-4470-90ac-aae1b25225a0.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-umuahia-presents-devfest-umuahia-2025/"
      ]
    },

    {
      title: "DevFest Eket 2025",
      desc: "Building safe, secure and scalable solutions with Firebase and Firebase Studio. The session also explores Firebase Studio and Builder.io, demonstrating how teams can visually build apps, connect to Firebase, and even bring designs to life from Figma.",
      org: "GDG Eket",
      loc: "Eket, Nigeria",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1760440000958/d7a52216-3ae0-4f80-aede-e5ef3a919080.png"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-eket-presents-devfest-eket-2025-building-safe-secure-amp-scalable-solutions/"
      ]
    },

    {
      title: "DevFest Bamenda 2025",
      desc: "This session shows how Firebase and Firebase Studio help teams build and scale mobile apps efficiently. The session also explores Firebase Studio and Builder.io, demonstrating how teams can visually build apps, connect to Firebase, and even bring designs to life from Figma.",
      org: "GDG Bamenda",
      loc: "Bamenda, Cameroon",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1760241079327/b23b2f40-4fa2-46ec-a02c-85e286bdea61.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-bamenda-presents-devfest-bamenda-2025-1/"
      ]
    },

    {
      title: "Flutter BootCamp - Beginner Series, GDG Athlone",
      desc: "Leading a 4-week immersive Flutter bootcamp. By the end of the program, participants will be able to confidently build a functional app using Flutter, applying core concepts like layouts, navigation, state management, and API integration.",
      org: "GDG Athlone",
      loc: "Ireland",
      badge: "Bootcamp",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1759479004589/9d1192dd-ff44-4bbd-90e0-a9ebf2ca9f26.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1759576522056/aacfc898-1258-4d13-a797-56e6b0772e0f.png"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-athlone-presents-flutter-bootcamp-week-1-introduction-to-flutter-amp-widgets/",
        "https://gdg.community.dev/events/details/google-gdg-athlone-presents-flutter-bootcamp-week-2-layouts-and-navigation/",
        "https://gdg.community.dev/events/details/google-gdg-athlone-presents-flutter-bootcamp-week-3-state-management-basics/",
        "https://gdg.community.dev/events/details/google-gdg-athlone-presents-flutter-bootcamp-week-4-forms-user-input-amp-http-requests/"
      ]
    },

    {
      title: "DevFest Onitsha 2025",
      desc: "This session shows how Firebase and Firebase Studio help teams build and scale mobile apps efficiently. The session also explores Firebase Studio and Builder.io, demonstrating how teams can visually build apps, connect to Firebase, and even bring designs to life from Figma.",
      org: "GDG Onitsha",
      loc: "Onitsha, NG",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1759154000640/79988152-3787-4684-90ea-5710fbfcf8ea.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1760240315900/26ed2a12-dace-469f-972d-338e141d4452.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1760240364707/f10a6a31-11e8-4e27-8126-2bc02c4feec8.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1760366960579/fda2c8d8-cc78-47b6-bf97-0c697486747a.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-onitsha-presents-devfest-onitsha-2025/"
      ]
    },

    {
      title: "Google Cloud Roadshow Lagos",
      desc: "Served as a Technical Assistant for the SSA Google Cloud Roadshow, providing hands-on support during technical sessions and code labs.",
      org: "Google",
      loc: "Lagos, NG",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1762527286668/05a7ff43-6d30-4ee1-8c1d-865d44d76728.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1758344555125/5161446b-0108-46b3-9a74-4565d1ffaa4a.jpeg"
      ],
      links: [
        "https://goo.gle/ssacloudroadshow"
      ]
    },

    {
      title: "DevFest Campobasso 2025",
      desc: "This session equips developers of all levels with the knowledge to create exceptional Flutter applications. Attendees will learn best practices for clean, maintainable Dart code, optimizing UI performance, and building future-proof apps.",
      org: "GDG Campobasso",
      loc: "Campobasso, Italy",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1757665439580/7979f7f1-1eee-47ad-a4a2-78aab706bb95.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-campobasso-presents-devfest-campobasso-2025/"
      ]
    },

    {
      title: "Google DevFest Kampala, Uganda",
      desc: "This session shows how Firebase and Firebase Studio help teams build and scale mobile apps efficiently. The session also explores Firebase Studio and Builder.io, demonstrating how teams can visually build apps, connect to Firebase, and even bring designs to life from Figma.",
      org: "GDG Kampala",
      loc: "Kampala, Uganda",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1757649643873/4d6f3adf-1976-4405-96bb-48e7bc3244a6.png"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-cloud-kampala-presents-devfest-kampala-2025/"
      ]
    },

    {
      title: "Google for Startups Accelerator Africa Alumni Summit",
      desc: "Participated in Google for Startups Accelerator Africa Alumni Summit, connecting with founders and industry leaders.",
      org: "Google",
      loc: "Lagos, NG",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1757615148963/5f4b1dcc-7699-4ed3-9ac9-c8a9ca1e63b7.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1757615166774/4ff9cafe-eac4-4439-8920-cd61682d9bef.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1757615188643/32d02c09-614d-4810-9c5e-a5851b7ff3d9.jpeg"
      ],
      links: [
        "https://startup.google.com/"
      ]
    },

    {
      title: "Developers Festival Jos 2025",
      desc: "Artificial Intelligence and Cloud technologies are shaping the next era of software development, enabling developers to build smarter, faster, and more scalable solutions. This session provides an overview of how AI models and cloud platforms intersect to accelerate productivity and innovation. We will explore Google's AI ecosystem, including Gemini for multimodal intelligence, Gemma for open-source flexibility, and developer-focused tools like the Gemini CLI and Code Assist.",
      org: "GDG Jos",
      loc: "Jos, Nigeria",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1757998966376/59941e2e-b2ac-44f5-ba9d-1e21815b4834.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-jos-presents-developers-festival-2025/"
      ]
    },

    {
      title: "Google I/O Extended Lusaka, Zambia",
      desc: "This session shows how Firebase and Firebase Studio help teams build and scale mobile apps efficiently. The session also explores Firebase Studio and Builder.io, demonstrating how teams can visually build apps, connect to Firebase, and even bring designs to life from Figma.",
      org: "GDG Lusaka",
      loc: "Lusaka, Zambia",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1756321747572/90cb5b0f-c5cf-4abf-a63a-ad2577064684.png"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-lusaka-presents-google-io-extended-lusaka/"
      ]
    },

    {
  title: "Minorities in Medicine NGO Flutter BootCamp",
  desc: "A hands-on Flutter BootCamp organized by Minorities in Medicine NGO, introducing participants to modern Flutter development through practical sessions, mentorship, and real-world mobile application development.",
  org: "Minorities in Medicine NGO",
  loc: "Kenya",
  badge: "BootCamp",
  images: [
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713439870/50581bb5-30fc-4a77-b900-d08869c9a5aa.png"
  ],
  links: [
    "https://gdg.community.dev/events/details/google-gdg-nyeri-presents-devfest-mt-kenya-2024/"
  ]
},

    {
      title: "Build With AI Flutter Lagos",
      desc: "Building an AI Diagnostic App in Flutter. A practical walkthrough on how to build a Flutter-based healthcare application powered by AI models for symptom checking, health inquiries, and medical document analysis.",
      org: "Flutter Lagos",
      loc: "Lagos, NG",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1752040308041/bb437842-42ce-4e5b-8bf1-d4b357ddc02c.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1753548896099/6e5f5570-d3a0-4a0e-bfa0-00b1a43f368c.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1753548923233/9e6597ab-ac35-4958-842e-5d838160b6be.jpeg"
      ],
      links: [
        "https://x.com/FlutterLagos/status/1942639268184097127",
        "https://x.com/FlutterLagos/status/1949057541834473811"
      ]
    },


    {
      title: "APICONF 2025 - Securing Mobile APIs in Flutter",
      desc: "Beyond API Keys: Advanced Strategies for Securing Mobile API Integrations. Common vulnerabilities and best practices for Flutter API integration and mobile security in production applications. Also featured as a podcast segment on securing mobile APIs.",
      org: "APICONF",
      loc: "Lagos, NG",
      badge: "Conference",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712874633/87f0f78f-7d9f-4d1c-9fee-be18c4fd8b2d.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1752992302457/d3a9f181-a887-40fb-9ebc-4fced77cd77c.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713080879/37de28f4-7c74-4cc0-813a-128d6fb9be2b.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1753278530589/ffd4564f-854d-4b25-9f7d-4cc10b7ef8bf.png"
      ],
      links: [
        "https://apiconf.net/",
        "https://apiconf.net/speakers",
        "https://www.linkedin.com/posts/api-conf-lagos_apiconflagos-apiconflagos2025-apiconfxapidays-activity-7352315410114904064-5Jqq?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://x.com/apiconflagos/status/1946536283989262560",
        "https://docs.google.com/presentation/d/1xV3vqTPFd30W1dkTGr00eKtvjg0VhH-qkwLPYdVnuPc/edit?usp=sharing",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7323291899585261569-LNl9?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://x.com/apiconflagos/status/1918332477199769920"
      ]
    },

    {
  title: "APIConf 2025 - Securing Mobile APIs in Flutter",
  desc: "A podcast session at APIConf 2025 exploring common mobile API security vulnerabilities in Flutter applications and the best practices for building secure, production-ready apps.",
  org: "APIConf",
  loc: "Lagos, Nigeria",
  badge: "Podcast",
  images: [
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713080879/37de28f4-7c74-4cc0-813a-128d6fb9be2b.jpeg",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1753278530589/ffd4564f-854d-4b25-9f7d-4cc10b7ef8bf.png"
  ],
  links: [
    "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7323291899585261569-LNl9",
    "https://x.com/apiconflagos/status/1918332477199769920"
  ]
},

    {
      title: "Building Scalable Applications Using Flutter - DevFest Scotland 2024",
      desc: "Scalability patterns and best practices in Flutter for production applications presented at DevFest Scotland.",
      org: "GDG Glasgow",
      loc: "Scotland, UK",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713154544/74f67b76-56d1-4692-87a8-b2d9bf09232c.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713162288/bd5b1f81-3407-4b9e-b329-9c24661105c2.png"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-glasgow-presents-building-scalable-applications-using-flutter/",
        "https://www.youtube.com/watch?v=2T--TIRfbng"
      ]
    },

    {
      title: "Google I/O Extended Nairobi, 2024",
      desc: "Flutter best practices and building beautiful, performant applications presented at Google I/O Extended Nairobi.",
      org: "GDG Nairobi",
      loc: "Nairobi, Kenya",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713127500/f157a6f9-a3e4-4122-afdf-07ebf7cb1a84.jpeg"
      ],
      links: [
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7220075247738183680-rrIq/"
      ]
    },

    {
      title: "GDG London FlutterDevCamp 2024 - State Management (Riverpod)",
      desc: "Mentorship session on state management with Riverpod for Flutter developers at GDG London's FlutterDevCamp.",
      org: "GDG London",
      loc: "London, UK",
      badge: "Mentorship",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713184245/9579f2ff-6c21-4495-b770-81541c3c13d1.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713189913/37f1daf5-db69-4590-a5fd-91631936118d.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713198183/56f3c9d2-45a8-4134-a470-26f2b842f574.png"
      ],
      links: [
        "https://www.linkedin.com/posts/google-developers-london_flutterdevcamp-flutterdevcamp-flutter-activity-7252682232983633921-Rm9K?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://www.linkedin.com/posts/google-developers-london_flutterdevcamp-flutter-apiintegration-activity-7247270701655613440-DeiC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://drive.google.com/file/d/1LDhAdHiDXL_JYIszb0qHNQEjuXDuB_xg/view?usp=sharing"
      ]
    },

    {
      title: "Flutter in Production, Nagpur, India",
      desc: "Production-level Flutter application development strategies and best practices for real-world deployments.",
      org: "Community",
      loc: "Nagpur, India",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713099442/78a1686c-0ffd-42ea-a72f-763b0fb00341.jpeg"
      ],
      links: [
        "https://www.linkedin.com/posts/atuoha-anthony_flutterinproduction-flutter-activity-7285681242107244544-H7Sg/"
      ]
    },

    {
      title: "Flutter Best Practices: Build Beautiful, Performant Apps - GDG Athlone",
      desc: "Actionable insights for creating exceptional Flutter apps with clean, maintainable code and optimized UI performance.",
      org: "GDG Athlone",
      loc: "Athlone, Ireland",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713112205/53921530-0cc7-437c-a7ca-8841b4b60637.png"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-athlone-presents-flutter-best-practices-build-beautiful-performant-apps/"
      ]
    },

    {
      title: "Build with AI 2025 - AI Flutter Club | Week 4: Integrating AI into Flutter Apps",
      desc: "In this session, we'll show Flutter developers how to integrate AI models like Google's Gemini and MedLM into health apps to enhance patient care, adding features such as symptom checkers, health inquiries, diagnosis assistance, and medical document recognition and analysis.",
      org: "GDG Ahlen, Germany",
      loc: "Ahlen, Germany",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1750269451011/1598bfc2-de40-4b64-bb89-2a09ee82cfe0.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1750506797426/e6eeccda-3109-4473-829d-82204cc4f8ec.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1750506801735/b5c3be14-77a4-42d3-84dc-243f28a4a384.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1750506825077/74254fd8-0475-47b3-9106-f25e1f4f60c1.png"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-ahlen-presents-build-with-ai-2025-ai-flutter-club-week-4-integrating-ai-into-flutter-apps-2025-06-21/cohost-gdg-ahlen",
        "https://www.youtube.com/watch?v=0HAdX4U3RUY",
        "https://www.youtube.com/watch?v=OFDozOKv1I4"
      ]
    },

    {
      title: "Build with AI 2025 - Future of Mobile Apps: Integrating AI into Flutter & Android",
      desc: "This talk introduces practical ways to integrate AI into Flutter applications, with a focus on Google's generative AI tools. The session concludes with a hands-on demo: building a functional Flutter app powered by Gemini AI, showcasing real-time generative capabilities.",
      org: "GDG Tampa Bay",
      loc: "Tampa Bay, Florida, US",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1750052508159/3380a7a3-18c6-41bc-a34e-928230a6c2ea.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1750374373502/79eaf1b9-01f1-4c4a-bc75-cb32f5d1a8a3.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1750374385216/a7e52c87-f273-4371-b81d-f9d0f583e008.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1750374533951/65d67b97-32b0-4b96-94b1-9776e9508cc1.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-tampa-bay-presents-future-of-mobile-apps-integrating-ai-into-flutter-amp-android/"
      ]
    },

    {
      title: "Build with AI 2025 - AI Flutter Club | Week 3: Building Screens & Navigation",
      desc: "This session focuses on building AI-powered multi-screen apps and mastering navigation within Flutter, covering structuring apps with multiple screens, implementing navigation, and routing.",
      org: "GDG Ahlen",
      loc: "Ahlen, Germany",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712890777/bd82a19f-9759-4fce-93b3-91dc48d2ea4a.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1750018606288/ee42e6bb-5f55-4603-9882-bfbab1f5435b.png"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-ahlen-presents-build-with-ai-2025-ai-flutter-club-week-3-building-screens-amp-navigation-2025-06-14/",
        "https://www.youtube.com/watch?v=qSB5ZWexh80"
      ]
    },



    {
      title: "Build with AI @ Bletchley Park 2025",
      desc: "A session on Smart Health Apps with Flutter and Gemini AI, part of the Build with AI community series.",
      org: "GDG Bletchley",
      loc: "Bletchley, UK",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712895177/cab3031d-1be6-4cf1-942b-fa7782c73122.png"
      ],
      links: [
        "https://us.trip.com/events/build-with-ai--bletchley-park-2025-20250708/",
        "https://gdg.community.dev/events/details/google-gdg-bletchley-presents-build-with-ai-bletchley-park-2025/"
      ]
    },

    {
      title: "Build with AI 2025 - AI Flutter Club | Week 2: Flutter Basics & Widgets",
      desc: "Part of the AI Flutter Club series, guiding developers through building AI-powered applications using Flutter and Google's AI technologies. This session focuses on understanding widgets, state management, and creating custom widgets for beautiful UI.",
      org: "GDG Ahlen",
      loc: "Ahlen, Germany",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712914008/553b8051-87d0-4fd9-af91-6b043b1ce163.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713062812/cf9af5d4-ca8a-41aa-b095-890c9beec923.png"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-ahlen-presents-build-with-ai-2025-ai-flutter-club-week-2-flutter-basics-amp-widgets-2025-06-07/",
        "https://www.youtube.com/watch?v=txpS_eT3o3k"
      ]
    },

    {
      title: "Build with AI 2025: Build Your Own AI Agent using Vertex AI, Firebase & Flutter",
      desc: "A community-driven event designed for developers to explore the intersection of Flutter and Generative AI, building AI-powered applications using Vertex AI and Gemini models.",
      org: "GDG Ahlen",
      loc: "Ahlen, Germany",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713011872/9a6db459-d155-4aec-bf00-7174d967a375.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713074562/0ae8679f-c035-41cd-a2a7-4265d93d271e.png"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-ahlen-presents-build-with-ai-2025-build-your-own-ai-agent-using-vertex-ai-firebase-amp-flutter-2025-05-24/",
        "https://www.youtube.com/watch?v=PghuZ3t24_Y"
      ]
    },

    {
      title: "Build with AI - Practical Uses of AI",
      desc: "Part of Google's Build with AI series, this community-led technical workshop covers generative AI trends and products from Google, with a hands-on session on building with tools like Gemini.",
      org: "GDG Cape Town",
      loc: "Cape Town, South Africa",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713087696/aba92521-9117-4008-bab7-195382fc44a2.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-cape-town-presents-build-with-ai-practical-uses-of-ai/"
      ]
    },

    {
      title: "Google DevFest, GDG Bronx 2024",
      desc: "Community talk on Flutter delivered at Google DevFest GDG Bronx.",
      org: "GDG Bronx",
      loc: "New York, US",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713120934/c873cb48-fd20-4a7a-b9c0-803cf0d4ea10.png"
      ],
      links: [
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7263834224661594113-pAEJ/"
      ]
    },

    {
      title: "Google I/O Extended, GDG Ajah, Lagos - Panel on AI and Machine Learning",
      desc: "Participated in a panel discussion focused on the latest trends and advancements in AI and machine learning, exploring emerging technologies, their impact on various industries, and how businesses and developers can leverage them to drive innovation and growth.",
      org: "GDG Ajah",
      loc: "Ajah, Lagos, Nigeria",
      badge: "Panel",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749755853107/c63f59b5-dd79-475d-b4f2-4677ed66d462.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713139563/82c25a9c-063a-49bd-82f2-f3b07e84754d.jpeg"
      ],
      links: [
        "https://www.linkedin.com/posts/gdg-ajah_googleio2023-googleioextended-googleio-activity-7093352004126748672-brgb/"
      ]
    },

    {
  title: "GDG London Flutter DevCamp 2024 - Riverpod Kickoff",
  desc: "A 4-week Flutter mentorship program organized by GDG London focused on state management with Riverpod. The program featured hands-on workshops, live coding sessions, mentorship, and practical guidance to help developers build scalable Flutter applications.",
  org: "Google Developer Groups (GDG) London",
  loc: "London, United Kingdom",
  badge: "Workshop",
  images: [
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713184245/9579f2ff-6c21-4495-b770-81541c3c13d1.jpeg",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713189913/37f1daf5-db69-4590-a5fd-91631936118d.jpeg",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713198183/56f3c9d2-45a8-4134-a470-26f2b842f574.png"
  ],
  links: [
    "https://www.linkedin.com/posts/google-developers-london_flutterdevcamp-flutterdevcamp-flutter-activity-7252682232983633921-Rm9K",
    "https://www.linkedin.com/posts/google-developers-london_flutterdevcamp-flutter-apiintegration-activity-7247270701655613440-DeiC",
    "https://drive.google.com/file/d/1LDhAdHiDXL_JYIszb0qHNQEjuXDuB_xg/view?usp=sharing"
  ]
},

    {
      title: "Mastering Your Tech Skills - Flutter for Web: Expanding Beyond Mobile",
      desc: "Delivered an insightful presentation on leveraging Flutter for web development. Covered responsive design, handling image and file uploads, cross-platform compatibility best practices, and effective deployment strategies for extending Flutter skills beyond mobile.",
      org: "GDG Stoke-on-Trent",
      loc: "Stoke-on-Trent, UK",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713175205/9aba6c58-4454-4713-b712-78f149f7f7a9.jpeg"
      ],
      links: [
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7232387380731641857-dlNi/"
      ]
    },

    {
      title: "GDG London FlutterDevCamp Mentorship 2024 - Flutter Career Accelerator",
      desc: "A specialized 5-week program offering opportunities to learn Flutter from industry experts, covering various aspects of mobile app development for beginner sessions in the Career Accelerator track.",
      org: "GDG London",
      loc: "London, UK",
      badge: "Mentorship",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713228098/98b4fb20-eb2c-4fb6-83c9-0a68ef2f10e0.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713243535/f4c539cf-e3f6-4a34-8b6e-888b47406b23.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713247707/7e6b6e91-7ae9-4697-ab4e-2bf8ea2c3bcb.jpeg"
      ],
      links: [
        "https://www.linkedin.com/posts/google-developers-london_flutterdevcamp-flutterdevcamp-flutter-activity-7252682232983633921-Rm9K?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://www.linkedin.com/posts/atuoha-anthony_flutterdevcamp-flutter-gdglondon-activity-7157948519624982528-o1gK/",
        "https://www.linkedin.com/posts/google-developers-london_flutterdevcamp-flutterdevcamp-flutter-activity-7158810946981765121-L0gC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Google DevFest Port Harcourt 2023",
      desc: "DevFest is the world's largest community-driven tech conference, offering opportunities to explore cutting-edge developer tools, learn from Google Developer Experts, and connect with fellow developers.",
      org: "GDG Cloud Port Harcourt",
      loc: "Port Harcourt, Nigeria",
      badge: "Conference",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713262621/10b1f7b5-95cb-4486-ae85-39c44f01eb09.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713274767/fa79502c-e434-4607-a553-9ab05c1ec518.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713277972/b52417b5-bad6-43b9-b20c-ab2b2d30a449.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-cloud-port-harcourt-presents-devfest-port-harcourt-2023/cohost-gdg-cloud-port-harcourt",
        "https://www.youtube.com/watch?v=lckbmIQDvuY"
      ]
    },

    {
      title: "Google DevFest Onitsha 2023",
      desc: "An annual decentralized tech conference tailored by GDG Onitsha community members, providing hands-on learning, technical talks by experts, and networking for local developers.",
      org: "GDG Onitsha",
      loc: "Onitsha, Nigeria",
      badge: "Conference",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713294006/1c3f69fd-45cc-495c-99e0-f202da712332.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713297110/48196671-1092-463e-8804-b0eea232f8e6.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-onitsha-presents-devfest-onitsha-2023/",
        "https://x.com/gdg_onitsha/status/1723250654175453528"
      ]
    },

    {
      title: "Google I/O Extended Owerri 2023",
      desc: "\"AI-Powered Future: Exploring Opportunities and Innovations\" - an event bringing together developers, creators, and tech enthusiasts to explore the latest innovations and celebrate Google's annual developer conference, featuring live streams of keynotes, breakout sessions, and insights from Google experts.",
      org: "GDG Owerri",
      loc: "F.U.T.O, Owerri, Nigeria",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713310363/272bb2f5-6f78-4a6a-9b65-a2fa93ee31aa.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713319742/130dbedc-67ff-4f45-94cd-44c9e01de75a.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713323204/7eaa1313-85d9-4802-afa7-edacd18618a1.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-owerri-presents-google-io-extended-owerri/"
      ]
    },

    {
      title: "Google I/O Extended Aba 2023",
      desc: "An I/O Extended event bringing local developers together for thoughtful discussions on favorite announcements from Google I/O, hands-on learning with Google experts, and a first look at Google's latest developer products.",
      org: "GDG Aba",
      loc: "Aba, Nigeria",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1750146023604/4b3d985d-e5b3-46f2-84ab-affcb383fc2a.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713345968/af5105fe-31a7-4bd3-a0bb-f0fe39fabf65.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713349775/146fa05c-8486-4bed-badd-782f7457503b.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-aba-presents-google-io-extended-aba-2023/"
      ]
    },

    {
      title: "Google I/O Extended Ajah Lagos 2024",
      desc: "A local event for developers to connect, learn about new Google developer products announced at I/O, and engage in discussions.",
      org: "GDG Ajah",
      loc: "Lagos, Nigeria",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713374636/4b1bab2a-6f72-4777-9e86-736926fb0bac.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713384850/89f52391-8cef-4eb5-be26-0c6d947efb73.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713768022/4fe6a86c-17bf-491a-a1d8-a6a6b256fcd1.webp"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-ajah-presents-io-extended-ajah-2024/"
      ]
    },

    {
      title: "NACOS South East Summit 2023",
      desc: "Community talk covering Flutter, Dart, and iOS development delivered at the NACOS South East Summit.",
      org: "Federal Polytechnic Nekede NACOS",
      loc: "Owerri, Imo State, Nigeria",
      badge: "Conference",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713394574/481adb5d-fcc1-4857-8fb7-8131addd6c57.jpeg"
      ],
      links: [
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-dart-ios-activity-7122898517764825092-QYmX/"
      ]
    },

    {
      title: "Google I/O Extended Owerri 2022",
      desc: "Part of the global Google I/O Extended series where local developer groups host events to discuss announcements and new technologies from the main Google I/O conference.",
      org: "GDG Owerri",
      loc: "Owerri, Nigeria",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713410184/7d4fcff2-1318-41a4-9a00-4b98ea01ed48.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713418464/18c1d486-8ba4-4bc9-b906-5229868194a5.jpeg"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-owerri-presents-google-io-extended-2022/"
      ]
    },

    {
      title: "SUBNET 4.0",
      desc: "Community talk on Flutter delivered at the Federal Polytechnic Nekede Computer Science Department's SUBNET 4.0 event.",
      org: "Federal Polytechnic Nekede",
      loc: "Owerri, Imo State, Nigeria",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713428355/eab27e16-f2ec-4997-a43d-88f5507468f8.jpeg"
      ],
      links: [
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7139153710047301632-U40b/"
      ]
    },

    {
      title: "Flutter for Web: Expanding Beyond Mobile - DevFest GDG Nyeri, Kenya",
      desc: "A talk on Flutter for Web, expanding beyond mobile development into web and multi-platform apps.",
      org: "GDG Nyeri",
      loc: "Nyeri, Kenya",
      badge: "Event",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713439870/50581bb5-30fc-4a77-b900-d08869c9a5aa.png"
      ],
      links: [
        "https://gdg.community.dev/events/details/google-gdg-nyeri-presents-devfest-mt-kenya-2024/"
      ]
    },

    {
      title: "Minorities in Medicine NGO Flutter BootCamp",
      desc: "Led a Flutter bootcamp for participants through the Minorities in Medicine NGO, introducing core Flutter development concepts.",
      org: "Minorities in Medicine NGO",
      loc: "Virtual",
      badge: "Bootcamp",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713445777/980eefad-82de-4d54-8947-7abbbe155fdf.png"
      ],
      links: [
        "https://www.linkedin.com/feed/update/urn:li:activity:7296584374781710336/"
      ]
    },

    {
      title: "Teaching Programming at Marist Bicentenary College",
      desc: "Taught introductory programming concepts to students at Marist Bicentenary College in 2021.",
      org: "Marist Bicentenary College",
      loc: "Nigeria",
      badge: "Teaching",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713473965/1458993e-587d-41fa-a9ec-c516c080e467.jpeg"
      ],
      links: [
        "https://maristbicentenary.org/"
      ]
    },

  ],

  // ────────────────────────────────────────────────────────────
  // PROJECTS
  // ────────────────────────────────────────────────────────────
  projects: [
    {
    title: "Formula 1 Tracker",
    desc: "A Flutter application for tracking Formula 1 teams, drivers, races, and standings with a modern, responsive user interface built using Flutter and Dart.",
    org: "Flutter",
    loc: "Reference",
    badge: "Sports",
    images: [
      "https://repository-images.githubusercontent.com/1181512345/e9b20d19-0bbb-41fe-8065-b8550a8b7298"
    ],
    links: [
      "https://github.com/Atuoha/formula_one_flutter",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7438509485851205632-6lbI"
    ]
  },
  {
    title: "FIFA Pitch",
    desc: "A dynamic football lineup visualization featuring animated formations and interactive player statistics for Portugal and Spain, built entirely with Flutter.",
    org: "Flutter",
    loc: "Reference",
    badge: "Sports",
    images: [
      "https://repository-images.githubusercontent.com/1291190487/14aecb7b-6573-4934-948a-dae74ee542d4"
    ],
    links: [
      "https://github.com/Atuoha/fifa_pitch",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-ugcPost-7479930426078347264-8g6G"
    ]
  },
  {
    title: "Modern Train Booking",
    desc: "A modern Flutter train booking interface featuring animated zoom interactions, connected routes, and elegant travel-inspired UI components.",
    org: "Flutter",
    loc: "Reference",
    badge: "UI",
    images: [
      "https://repository-images.githubusercontent.com/1274296037/5da3eddd-d5f6-4220-98ad-c2f74f4149de"
    ],
    links: [
      "https://github.com/Atuoha/modern_train_booking",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-ugcPost-7473700385334042625-behG"
    ]
  },
  {
    title: "Nokia 105 Preview",
    desc: "A high-fidelity recreation of the iconic Nokia 105 using Flutter's CustomPaint, vector graphics, and path manipulation techniques.",
    org: "Flutter",
    loc: "Reference",
    badge: "Graphics",
    images: [
      "https://repository-images.githubusercontent.com/1260097347/60e01499-d9d0-4cf5-b755-752e1e03fd9b"
    ],
    links: [
      "https://github.com/Atuoha/nokia_105_preview",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-ugcPost-7468559470147551232-eo9i"
    ]
  },
  {
    title: "PlayStation Controller Preview",
    desc: "A pixel-perfect Flutter recreation of a PlayStation controller using CustomPaint, vector paths, and advanced drawing techniques.",
    org: "Flutter",
    loc: "Reference",
    badge: "Graphics",
    images: [
      "https://repository-images.githubusercontent.com/1219959608/ce89e320-9d93-41d9-b5fe-26a71b3ff9b5"
    ],
    links: [
      "https://github.com/Atuoha/playstation_controller_preview",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-ugcPost-7453493939254509569-BK6Y"
    ]
  },
  {
    title: "UEFA Pitch Live",
    desc: "An interactive football pitch experience with animated player lineups and live player statistics for Chelsea and Manchester United.",
    org: "Flutter",
    loc: "Reference",
    badge: "Sports",
    images: [
      "https://repository-images.githubusercontent.com/1214208333/cbe5fcf3-559e-4e24-a385-5d1a882b316f"
    ],
    links: [
      "https://github.com/Atuoha/uefa_pitch_live",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7451209611220647936-gLOb"
    ]
  },
  {
    title: "Route Tracer",
    desc: "An interactive Flutter web application for drawing custom routes and animating vehicles with realistic movement, rotation, and configurable speed controls.",
    org: "Flutter",
    loc: "Reference",
    badge: "Utility",
    images: [
      "https://repository-images.githubusercontent.com/1194457321/5765f517-1597-40c8-9f92-e2c8931e0eaf"
    ],
    links: [
      "https://github.com/Atuoha/route_tracer",
      "https://atuoha.github.io/route_tracer/",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7443663590827376641-XVmP"
    ]
  },
  {
    title: "Chess Setup",
    desc: "A clean and minimalist chess application focused on smooth gameplay, online multiplayer, and distraction-free user experience.",
    org: "Flutter",
    loc: "Reference",
    badge: "Game",
    images: [
      "https://repository-images.githubusercontent.com/1187829554/add1bef0-6841-41fe-b264-6c93ea089ae6"
    ],
    links: [
      "https://github.com/Atuoha/chess_setup",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7441043544842219520-W9Fh"
    ]
  },
  {
    title: "Action Figure",
    desc: "An animated Flutter concept inspired by a Dribbble design, showcasing interactive action figure packaging with engaging transitions and motion effects.",
    org: "Flutter",
    loc: "Reference",
    badge: "Animation",
    images: [
      "https://repository-images.githubusercontent.com/1171549753/3f54e1aa-7d34-411e-bb15-1d53a91488e5"
    ],
    links: [
      "https://github.com/Atuoha/action_figure_anime",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7434554067252736001-IH9c"
    ]
  },
  {
    title: "Premium Menu",
    desc: "A premium restaurant menu interface featuring zoomable food imagery, animated hotspots, glassmorphic tooltips, and elegant Flutter interactions.",
    org: "Flutter",
    loc: "Reference",
    badge: "UI",
    images: [
      "https://repository-images.githubusercontent.com/1163178148/d7f800f9-8e8e-4f9f-a16f-eadf446dab35"
    ],
    links: [
      "https://github.com/Atuoha/premium_menu",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7430888632007327744-QNTW"
    ]
  },
  {
    title: "Circa Anime",
    desc: "A Flutter experiment featuring an animated orbital navigation system where menu items rotate around a central hub, pause on focus, and expand with contextual details.",
    org: "Flutter",
    loc: "Reference",
    badge: "Animation",
    images: [
      "https://repository-images.githubusercontent.com/1145087105/06d32d1d-006b-4e6e-b5b6-e641566e893c"
    ],
    links: [
      "https://github.com/Atuoha/circa_anime",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7422641141730242560-IphJ"
    ]
  },
  {
    title: "People Globe 3D",
    desc: "A smooth, interactive 3D people globe built in Flutter using custom mathematical projections and ticker-driven animations for realistic motion.",
    org: "Flutter",
    loc: "Reference",
    badge: "Graphics",
    images: [
      "https://repository-images.githubusercontent.com/1138827726/c05f0f04-8d1f-4dbc-bcef-785b988fd358"
    ],
    links: [
      "https://github.com/Atuoha/peoples_globe_3d",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7419413660797870080-qVA_"
    ]
  },
  {
    title: "Rubiks Cube",
    desc: "A Flutter rendering experiment demonstrating a fully interactive Rubik's Cube using custom transformations, animations, and 3D-inspired effects.",
    org: "Flutter",
    loc: "Reference",
    badge: "Graphics",
    images: [
      "https://repository-images.githubusercontent.com/1129202605/12b15c0c-5b13-403a-8c5e-4e4f5cbed9e7"
    ],
    links: [
      "https://github.com/Atuoha/rubiks_cube",
      "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7414364838354677760-MG3y"
    ]
  },


    {
      title: "Shoes Shop Web Admin",
      desc: "Admin dashboard for managing e-commerce catalog and operations.",
      org: "Flutter",
      loc: "Web",
      badge: "Web Admin",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713562813/edae4bae-5616-497c-815c-9ec193648771.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713565808/23dff132-cf4c-441d-a705-893237a3f702.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/shoes_shop_web_admin",
        "https://www.linkedin.com/posts/atuoha-anthony_project-programming-flutter-activity-7069062358668632065-_gDH?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://www.linkedin.com/posts/atuoha-anthony_project-programming-flutter-activity-7069058463728869377-ncjy?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Shoes Shop Multivendor",
      desc: "A Flutter-based app that allows multiple vendors to list and sell footwear products. Users can browse, compare, and purchase shoes from various sellers in one seamless marketplace.",
      org: "Flutter",
      loc: "Multivendor",
      badge: "E-commerce",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713608854/5b645698-aed4-4c07-a2ca-321ec7949bb9.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713616010/b1fca1dc-c9a9-44ed-8d74-39f42d9215ec.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713619349/eb09a86b-2a89-4f7c-924f-96bde5b1c23a.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749714324672/efea2001-b7c2-4618-99f1-9363a3b56fd3.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749714421269/12a44949-c9ea-41aa-be4f-91e8b81ba6cc.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749714436877/517510f3-e68a-4fcd-853d-b9d64b6940f4.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749714461250/593346a7-fdcb-499c-8148-d86d3851964e.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/shoes_shop",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7149086360841216000-y2s_?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-dart-firebase-activity-7079372529391271937-_SpD?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Flutter ChatGPT",
      desc: "Real-time conversational app powered by OpenAI's ChatGPT.",
      org: "Flutter",
      loc: "AI",
      badge: "AI App",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713501602/2c3fb650-a007-4a84-b599-89981735109d.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713512159/4bf8e1d7-95d0-4ddb-913e-14c0b7662b5a.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/flutter_ChatGPT",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7140227534549430272-288d?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Snap2Chef AI",
      desc: "AI-powered cooking assistant using Flutter and Gemini API.",
      org: "Flutter",
      loc: "Gemini AI",
      badge: "AI App",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749707567668/56caf470-618e-4431-81d1-ff6347e14b2a.png"
      ],
      links: [
        "https://github.com/Atuoha/snap2chef_ai",
        "https://atuoha.hashnode.dev/building-an-ai-powered-cooking-assistant-with-flutter-and-gemini"
      ]
    },

    {
      title: "AI Medical Chatbot",
      desc: "Medical assistant with text, audio, and image support using Gemini AI.",
      org: "Flutter",
      loc: "Healthcare AI",
      badge: "AI App",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749707488415/08c426c7-9ce7-4c86-aad9-c9df2b3d19ba.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/ai_medical_assistant",
        "https://atuoha.hashnode.dev/building-a-medical-chatbot-with-flutter-and-gemini-a-beginners-guide"
      ]
    },

    {
      title: "SwiftPay",
      desc: "Comprehensive fintech app for payments, transfers, and bill management.",
      org: "Flutter",
      loc: "Fintech",
      badge: "Fintech",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749711179319/60df758d-5810-4acc-897d-46727f2b36ad.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749711159218/e017e629-f980-49c7-9713-cbff6ee07142.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749711169565/b8c142c1-dd0d-4a72-929a-0ef61581e0a4.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749711460199/0858e9de-206b-469a-90f7-8a489369ad5e.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/fintech_app_skins",
        "https://lnkd.in/d9E5tU9r",
        "https://www.linkedin.com/feed/update/urn:li:activity:7134809237674733569/?originTrackingId=GBzfwXanSoCLGG9zzrvt5w%3D%3D",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-flutter-flutterdev-activity-6967510141311037440-h_yK?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-dart-activity-6987720615566675968-l8Aa?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Realty App",
      desc: "Real estate platform for browsing, buying, renting, and selling properties.",
      org: "Flutter",
      loc: "Real Estate",
      badge: "Real Estate",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749711603008/09577015-3d48-4e58-8c56-465ebeb7ddcd.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749707890148/86d50106-a170-4fb8-b7b7-af7ab5087a22.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749724817943/ed4b8fc8-96a8-4637-bf40-b751d06946e3.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749724850462/1b6f841f-ccb9-4f04-9ed7-ab26cb1ceac1.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/real-estate",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7182274946369208320-2-5M?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://www.linkedin.com/feed/update/urn:li:activity:7088406103931183104/?originTrackingId=vSTlsnP6TNGUA%2FCCMsNomQ%3D%3D"
      ]
    },

    {
      title: "Tour360",
      desc: "Immersive 360-degree panoramic city tour exploration platform.",
      org: "Flutter",
      loc: "Travel",
      badge: "Travel",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749711055835/196b0149-a278-409f-815f-78b70dd6674d.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/tour_360",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-dart-flutter-activity-7047804093368610816-7zjP?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Shopping App",
      desc: "Multi-category e-commerce app with cart and wishlist features.",
      org: "Flutter",
      loc: "Shopping",
      badge: "E-commerce",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749714097570/4ec0a291-4c25-44a5-8431-12db4b9c6d20.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749714113597/92e50775-3b83-4068-ad36-5761187a2b53.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749714126458/86108286-e708-40c1-baf9-fa3e121decf3.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749714139218/0bc1c74e-29c0-4408-bf89-c4594d92ee5f.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/shoe_store_ecom",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7148943722590756864-swXt?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Chat Skin",
      desc: "Modern chat app UI with customizable themes and smooth animations.",
      org: "Flutter",
      loc: "UI",
      badge: "UI Kit",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749723435664/f2b2abaa-1e71-4420-9917-1e494306bcd6.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749723444772/89459fb2-1ffd-44ca-83c6-3af862705d44.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/chatapp_skin"
      ]
    },

    {
      title: "Advanced Task Management",
      desc: "Task tracker with deadlines, reminders, and collaborative features.",
      org: "Flutter",
      loc: "Productivity",
      badge: "Productivity",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749723519559/7a49ad6e-a60b-45df-969a-216bf407b2e1.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749723530002/ca22dca6-f428-420d-ae67-40ad4ba8dc25.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749723539705/bdccd590-2e1d-4f63-9cab-31599a673ea8.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/ADtask_management",
        "https://www.linkedin.com/feed/update/urn:li:activity:7128985440967139328/?originTrackingId=fCbwEMdeSuaD176YkonOZw%3D%3D"
      ]
    },

    {
      title: "Job Application App (Jobly)",
      desc: "Job search and application platform with resume uploads and tracking.",
      org: "Flutter",
      loc: "Jobs",
      badge: "Job Portal",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749724264395/ef12e7fd-5325-45d1-a66d-eee718429327.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749724273389/486b70f8-6f48-41bc-b6f8-e32cde29e53f.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/jobly"
      ]
    },

    {
      title: "Shoppie - Shopping App",
      desc: "E-commerce app with browse, search, and secure checkout features.",
      org: "Flutter",
      loc: "Shopping",
      badge: "Shopping",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749724355163/bd7c575c-6ebe-49bf-8b96-4729c40ba4eb.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749724366704/816a0955-cd96-4fbb-90bc-e1eec5b34c3b.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749724375994/5579e9c4-8251-407a-9bd6-994a23f099fc.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/shoppie"
      ]
    },

    {
      title: "AD Ecom - Shopping App",
      desc: "Feature-rich e-commerce app for browsing and purchasing products.",
      org: "Flutter",
      loc: "Shopping",
      badge: "E-commerce",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749724452789/fbc1c480-b6a1-4581-bf21-a0a6773cd604.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749724461939/826abf69-7b0d-48b5-9bb6-5f863e6c413a.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/ad_ecom"
      ]
    },

    {
      title: "Workout App",
      desc: "Fitness tracking and workout management application.",
      org: "Flutter",
      loc: "Fitness",
      badge: "Fitness",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1751009965258/22998135-a2bc-444f-8902-2263862d8c4e.png"
      ],
      links: [
        "https://github.com/Atuoha/workouts"
      ]
    },

    {
      title: "Dog Finder",
      desc: "A Flutter app that lets users explore and discover dog breeds and their sub-breeds, providing detailed information and images to help users find the perfect dog based on breed characteristics.",
      org: "Flutter",
      loc: "Reference",
      badge: "Utility",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712283824/a07640ea-44bd-4825-9bac-1ba7bad12da3.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712298605/adcc63b8-01f9-416d-8700-c50d5654287a.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712313058/8cfaf160-bf94-4b01-b48a-3e127cb5e8a9.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712329949/f61e1cb0-03f3-44c1-a8de-12fb6a8b6beb.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/dog_finder",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7123921334597824512-kEV0?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Multivendor Shop",
      desc: "A Flutter app that enables multiple sellers to showcase and sell their products in a single marketplace, supporting vendor management, product browsing, and secure customer purchases.",
      org: "Flutter",
      loc: "Multivendor",
      badge: "E-commerce",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749711779476/ffaa9d03-d8eb-46f2-9949-cdb0aa3affaf.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749709528551/3a5f2e3f-9582-47b4-86a5-bb0f340dc54d.png"
      ],
      links: [
        "https://github.com/Atuoha/multivendor_shop",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7181161891900137473-swE2?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Plantly",
      desc: "A Flutter app that uses Plant.id to identify plants from photos with high accuracy. It also helps users manage their plant collection with care tips, reminders, and growth tracking.",
      org: "Flutter",
      loc: "Lifestyle",
      badge: "Utility",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749711662286/befcbc3d-7faa-4a26-8192-b5edddb967e6.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749711733813/b1021494-eab8-4408-a0ea-60a44e054c89.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749708249234/02416a23-3cf7-4326-a7b5-5a40449b5253.png"
      ],
      links: [
        "https://github.com/Atuoha/plantly",
        "https://lnkd.in/dT6bwtcQ",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7156290142075265024-3Ggm?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Diaree",
      desc: "A Flutter-based journaling app designed for personal reflection, daily logging, and mood tracking, offering customizable entries, reminders, and analytics to help users cultivate mindfulness and self-awareness.",
      org: "Flutter",
      loc: "Lifestyle",
      badge: "Productivity",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749708384802/6f019de6-cf15-44c0-b021-4c67aca4a45c.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749710795753/5f266d0a-f59c-47aa-85e2-9fe2a588ee3a.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749710819313/1e28ab41-750c-41ce-bf94-675167bfd8be.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749710828876/b24e53cb-ce94-4fb5-acf7-5db23f6a7fd3.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749710857463/cd4d079f-4488-44b4-b9b6-b18297da5c4b.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749710906704/3c8d3d3f-450d-442d-8ed6-cc347785c329.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/diaree",
        "https://lnkd.in/ds8aQVvy",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7153636366235414528-oxOP?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7122195373246324736-YUA1?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Zedmusic",
      desc: "An offline music player app that allows users to search, stream, and download their favorite songs for offline listening, offering a vast library of tracks across various genres without needing an internet connection.",
      org: "Flutter",
      loc: "Entertainment",
      badge: "Media",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749711401032/2865d603-faee-40b8-8741-6c554818b322.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749711334584/a811d1ee-edbf-443b-b6bd-c0f024e9ad01.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749709683996/32090e42-ad4f-4917-a2bd-9785bf4b335f.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749708621068/898693f0-cd8f-448c-b520-4d4eed1a9dc1.png"
      ],
      links: [
        "https://github.com/Atuoha/zedmusic",
        "https://lnkd.in/dXJr7JTg",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7151868032183590913-zIak?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://www.linkedin.com/feed/update/urn:li:activity:7151867449695444993/?originTrackingId=lZ6uv56HR0CSZDj64zoj8A%3D%3D"
      ]
    },

    {
      title: "Flutter JIRA",
      desc: "A task management app built with Flutter that features a Kanban board for easy task tracking and assignment, helping teams organize workflows, prioritize tasks, and collaborate efficiently in real time.",
      org: "Flutter",
      loc: "Productivity",
      badge: "Productivity",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712070008/2bf0f424-5fb0-43d0-8797-2e9814d0b768.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749707720454/5bb3b529-1221-4bcc-8f3d-dd2d440aace0.png"
      ],
      links: [
        "https://github.com/Atuoha/Flutter-JIRA",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7272826253735313409-dua1?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7272672901978341376-Wzp1?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Jetpack Store",
      desc: "A Kotlin-based shopping app built with Jetpack Compose, leveraging Firebase, Hilt/Dagger for dependency injection, Retrofit for networking, and Coroutines for async tasks. Integrates Flutterwave SDK for secure payments and follows Clean Architecture for maintainable, scalable code.",
      org: "Kotlin / Jetpack Compose",
      loc: "Shopping",
      badge: "E-commerce",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712835207/51b15e66-7b0c-4b4f-9f74-0aafa0712f42.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749712825338/1cc1f8d8-45d5-4fad-94f3-6591ba6381c8.jpeg"
      ],
      links: [
        "https://github.com/Atuoha/ecom-jetpack"
      ]
    },

  ],



  // ────────────────────────────────────────────────────────────
  // RECOGNITION & AWARDS
  // ────────────────────────────────────────────────────────────
  recognition: [

    {
      title: "Google Developer Expert (GDE) Flutter & Dart",
      desc: "Endorsed as a Member of the Google Developer Expert program for Flutter and Dart in 2025. Google Developer Experts are experienced Google technology experts, influencers, and thought leaders.",
      org: "Google",
      loc: "-",
      badge: "Certification",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749789210026/5c52945c-04bf-4c6f-a912-f2c25d48f850.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749789237374/ac9abf02-68d2-4019-a928-94a359378341.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749789265016/584ced6e-f13d-432d-b97d-8b89522dc52b.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749790935593/53efae48-3b14-4211-b06c-0f43a8ade626.png",
        "https://media.licdn.com/dms/image/v2/D4E22AQG9MCfakzFzDQ/feedshare-shrink_1280/B4EZ2QfajlJkAM-/0/1776245649162?e=1785369600&v=beta&t=wArGQDodj2vUPrs67lt-2UtSWq_N2xFDqCiqk9uELnI"
      ],
      links: [
        "https://developers.google.com/community/experts",
       "https://sessionize.com/google-developer-experts?q=Atuoha%20Anthony"
      ]
    },

    {
      title: "Sessionize Most Active Speaker 2025",
      desc: "Recognized in the top 3% of most active speakers for consistent community engagement and knowledge sharing throughout the year.",
      org: "Sessionize",
      loc: "Online",
      badge: "Recognition",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1768302595221/bcb58715-c17f-4bb5-a77f-1d2dc17dddf1.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1768302610143/6b9ad556-5a1f-440f-b5b1-5b9a4041939a.png"
      ],
      links: [
        "https://sessionize.com/most-active-speakers-2025?q=atuoha%20anthony"
      ]
    },

    {
      title: "freeCodeCamp Top Open Source Contributor 2025",
      desc: "Recognized as a Top Contributor in the News/Article category for consistent high-quality technical writing.",
      org: "freeCodeCamp",
      loc: "Online",
      badge: "Recognition",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764156545481/3c228faa-4d75-4ae5-acff-9b236c9d712e.png"
      ],
      links: [
        "https://www.freecodecamp.org/news/freecodecamp-top-open-source-contributors-2025/"
      ]
    },

    {
      title: "4th Out of 35 Nigeria's Most Outstanding Senior Software Engineers",
      desc: "Listed among Nigeria's top senior software engineers by InternPulse.",
      org: "InternPulse",
      loc: "Nigeria",
      badge: "Recognition",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749788608772/4ce8f552-d54f-4730-80ad-83912d38eef4.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1749788618771/24ae33b4-c495-4a7a-948f-d8e3a76790d8.png"
      ],
      links: [
        "https://www.linkedin.com/posts/internpulse_nigerias-most-outstanding-senior-software-ugcPost-7324386259513036800-1jxi?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "LinkedIn Content Reach Milestone",
      desc: "A snapshot highlighting the reach of a Flutter-related post on LinkedIn.",
      org: "LinkedIn",
      loc: "Online",
      badge: "Milestone",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1750665843531/c89b588b-b8e5-44fc-a175-8f22523607ed.png"
      ],
      links: [
        "https://www.linkedin.com/posts/atuoha-anthony_flutter-activity-7322510776051593217-kJUM?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY"
      ]
    },

    {
      title: "Groundbreaker Talents Mentorship Program",
      desc: "This mentorship program connects experienced tech professionals with young African women enrolled in a fully residential scholarship. As a mentor, supporting Margret Nanyonga on her journey into software engineering, providing guidance, technical direction, and career support while contributing to expanding access and opportunities for underrepresented talent in tech.",
      org: "Groundbreaker Talents, Germany",
      loc: "Africa (Uganda)",
      badge: "Mentorship",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1768319315460/4c79f404-79fa-4262-8453-66e5f634d570.jpeg",
        "https://media.licdn.com/dms/image/v2/D4E2DAQEnrO-6wclmaw/profile-treasury-image-shrink_1280_1280/B4EZ8m0wLkIAAc-/0/1783062791151?e=1784635200&v=beta&t=Fu64t13kesMNp8vSDw6trUDb2BjudvP-0cySjc1CqXE"
      ],
      links: [
        "https://groundbreaker.org/",
        "https://www.linkedin.com/posts/atuoha-anthony_womenintech-groundbreakertalents-activity-7389672834828148737-TmQ7"
      ]
    },

   

  ],


    // ────────────────────────────────────────────────────────────
  // JUDGING
  // ────────────────────────────────────────────────────────────
  judge: [
 {
      title: "3MTT Nigeria Cohort 3 Virtual Hackathon Finals Judge",
      desc: "Served as a judge for the 3MTT Nigeria Cohort 3 Virtual Hackathon Finals, where the winning team represents Lagos at the South-West Regional Hackathon.",
      org: "3MTT / NITDA",
      loc: "Virtual",
      badge: "Judging",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1763466400906/81ba0fee-24d9-4bae-bb7a-b1e545fc0118.png"
      ],
      links: [
        "https://3mtt.nitda.gov.ng/"
      ]
    },

    {
      title: "NASA Space Apps Ahlen 2025 - Judge",
      desc: "Served as a judge for NASA Space Apps Challenge Ahlen 2025, evaluating innovative solutions submitted by participants. Leveraging expertise as a Google Developer Expert in Flutter and Dart, assessing technical quality, creativity, and feasibility of projects. Also reviewed Geodata Innovator, a web-based application designed to help users interactively explore and analyze NASA's high-resolution satellite imagery.",
      org: "NASA + GDG Ahlen",
      loc: "Ahlen, Germany",
      badge: "Judging",
      images: [
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1759307458953/b75dd19c-a533-4419-b18a-58ae499f67b0.png",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1758862140123/9bb2baa5-a4a2-419d-8dce-79365363889c.jpeg",
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1759698329098/e0d7795e-e23a-4288-adf8-52860f6b619c.png"
      ],
      links: [
        "https://www.linkedin.com/posts/nasa-space-apps-ahlen_nasaspaceapps-spaceappsahlen-gde-activity-7377037509928689666-vvlc?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwyGPUBBsCoiAfb8rqh-VMxPiafwnSL3RY",
        "https://gdg.community.dev/events/details/google-gdg-ahlen-presents-nasa-space-apps-challenge-ahlen-2025-devfest-2025-day-1/",
        "https://gdg.community.dev/events/details/google-gdg-ahlen-presents-nasa-space-apps-challenge-ahlen-2025-devfest-2025-day-2/",
        "https://www.spaceappschallenge.org/2025/local-events/ahlen/",
        "https://www.spaceappschallenge.org/2025/",
        "https://www.nasa.gov/nasa-space-apps-challenge-2025/",
        "https://www.spaceappschallenge.org/2025/find-a-team/geodata-innovator/?tab=project"
      ]
    },
  ]

};