export const sectionConfig = [
  {
    name: "Hero Lead",
    show: true,
    data: {
      logoSrc: null,
      titleText: "Título",
      subtitleText: "Subtítulo",
      titleColor: "#000",
      subtitleColor: "#000",
      titleFont: "Roboto",
      subtitleFont: "Poppins",
      formPlaceholderName: "Nome",
      formPlaceholderPhone: "Telefone",
      formPlaceholderEmail: "E-mail",
      formTextColor: "text-gray-500",
      buttonText: "Clique aqui",
      buttonColor: "#3B82F6",
      buttonTextColor: "#fff",
      buttonLink: "#",
      backgroundImgSrc: null,
      sectionBackgroundColor: "#F3F4F6",
    },
    form: [
      { name: "logoSrc", type: "file", label: "Logo" }, //
      { name: "backgroundImgSrc", type: "file", label: "Imagem de Fundo" },
      {
        name: "sectionBackgroundColor",
        type: "color",
        label: "Cor de Fundo da seção",
      },
      { name: "titleText", type: "text", label: "Texto" },
      { name: "titleFont", type: "text", label: "Fonte do Título" },
      { name: "titleColor", type: "color", label: "Cor do Título" },

      { name: "subtitleText", type: "text", label: "Texto" },
      { name: "subtitleColor", type: "color", label: "Cor do Subtítulo" },
      { name: "subtitleFont", type: "text", label: "Fonte do Subtítulo" },

      {
        name: "formPlaceholderName",
        type: "text",
        label: "Placeholder Nome",
      },
      {
        name: "formPlaceholderPhone",
        type: "text",
        label: "Placeholder Telefone",
      },
      {
        name: "formPlaceholderEmail",
        type: "text",
        label: "Placeholder E-mail",
      },
      {
        name: "formTextColor",
        type: "color",
        label: "Cor do Texto do Formulário",
      },
      { name: "buttonText", type: "text", label: "Texto do Botão" },
      { name: "buttonColor", type: "color", label: "Cor do Botão" },
      {
        name: "buttonTextColor",
        type: "color",
        label: "Cor do Texto do Botão",
      },
      { name: "buttonLink", type: "text", label: "Link do Botão" },
    ],
  },
  {
    name: "hero",
    show: true,
    data: {
      titleText: "Título",
      titleFont: "Roboto",
      titleColor: "text-black",

      subtitleText: "Subtítulo",
      subtitleFont: "Poppins",
      subtitleColor: "#000",

      contentText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae enim eget eros gravida tempor. Sed vitae vulputate odio. Quisque malesuada libero in placerat suscipit. Morbi semper mi libero, a ultricies enim pellentesque et. Sed et pulvinar metus. Donec in dignissim eros. Fusce dignissim tellus vitae sapien viverra, eu porttitor tortor dignissim.",
      contentFont: "Poppins",
      contentColor: "#000",

      buttonText: "Clique aqui",
      buttonColor: "#3B82F6",
      buttonTextColor: "#fff",
      buttonLink: "#",

      sectionBackgroundColor: "bg-blue-500",
      overlayImgSrc: null,
      // backgroundImgSrc: null,
    },
    form: [
      { name: "overlayImgSrc", type: "file", label: "Imagem de destaque" },
      // { name: "backgroundImgSrc", type: "file", label: "Imagem de Fundo" },
      {
        name: "sectionBackgroundColor",
        type: "color",
        label: "Cor de Fundo da seção",
      },

      { name: "titleText", type: "text", label: "Texto" },
      { name: "titleFont", type: "text", label: "Fonte do Título" },
      { name: "titleColor", type: "color", label: "Cor do Título" },

      { name: "subtitleText", type: "text", label: "Texto" },
      { name: "subtitleColor", type: "color", label: "Cor do Subtítulo" },
      { name: "subtitleFont", type: "text", label: "Fonte do Subtítulo" },

      { name: "contentText", type: "text", label: "Texto" },
      { name: "contentFont", type: "text", label: "Fonte do Conteúdo" },
      { name: "contentColor", type: "color", label: "Cor do Conteúdo" },

      { name: "buttonText", type: "text", label: "Texto do Botão" },
      { name: "buttonColor", type: "color", label: "Cor do Botão" },
      {
        name: "buttonTextColor",
        type: "color",
        label: "Cor do Texto do Botão",
      },
      { name: "buttonLink", type: "text", label: "Link do Botão" },
    ],
  },
  {
    name: "icons",
    show: true,
    iconColor: "text-gray-900",
    sectionBackgroundColor: "bg-gray-100",

    data: {
      icons: [
        //   { icon: <Activity />, title: "Activitys" },
        //   { icon: <Airplay />, title: "Airplay" },
        //   { icon: <AlertCircle />, title: "AlertCircle" },
        //   { icon: <AlertOctagon />, title: "AlertOctagon" },
        //   { icon: <AlertTriangle />, title: "AlertTriangle" },
      ],
    },
  },
  {
    name: "video",
    show: true,
    data: {
      videoUrl:
        "https://www.youtube.com/watch?v=AkUWHR_OvrY&ab_channel=SentinelieSobral",
      sectionBackgroundColor: "bg-gray-100",
      backgroundImgSrc: null,
    },
    form: [
      { name: "videoUrl", type: "text", label: "URL do Vídeo" },
      {
        name: "sectionBackgroundColor",
        type: "color",
        label: "Cor de Fundo da seção",
      },
      { name: "backgroundImgSrc", type: "file", label: "Imagem de Fundo" },
    ],
  },
  {
    name: "map",
    show: true,
    data: {
      sectionBackgroundColor: "#f6f6f6",

      titleText: "Map Section",
      titleFont: "Roboto",
      titleColor: "#000",

      contentText: "This is a map section",
      contentFont: "Poppins",
      contentColor: "#000",

      mapTitleText: "",
      mapTitleFont: "Roboto",
      mapTitleColor: "#000",

      mapSubTitleText: "",
      mapSubTitleFont: "Poppins",
      mapSubTitleColor: "#000",

      mapEmbedUrl:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59978.30878222007!2d-44.029435299999996!3d-20.023438199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bfe0599c6d59%3A0x4f5d614ebc356e9d!2sPista%20de%20skate%20-%20Vila%20ideal!5e0!3m2!1spt-BR!2sbr!4v1730815066650!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    form: [
      {
        name: "sectionBackgroundColor",
        type: "color",
        label: "Cor de Fundo da seção",
      },
      { name: "titleText", type: "text", label: "Texto" },
      { name: "titleFont", type: "text", label: "Fonte do Título" },
      { name: "titleColor", type: "color", label: "Cor do Título" },

      { name: "contentText", type: "text", label: "Texto" },
      { name: "contentFont", type: "text", label: "Fonte do Conteúdo" },
      { name: "contentColor", type: "color", label: "Cor do Conteúdo" },

      { name: "mapTitleText", type: "text", label: "Título" },
      { name: "mapTitleFont", type: "text", label: "Fonte do Título" },
      { name: "mapTitleColor", type: "color", label: "Cor do Título" },

      { name: "mapSubTitleText", type: "text", label: "Subtítulo" },
      { name: "mapSubTitleFont", type: "text", label: "Fonte do Subtítulo" },
      { name: "mapSubTitleColor", type: "color", label: "Cor do Subtítulo" },

      { name: "mapEmbedUrl", type: "text", label: "Iframe do Mapa" },
    ],
  },
  {
    name: "footer",
    show: true,
    data: {
      logoSrc: null,
      email: "email@email.com",
      whatsappLink: "",
      instagramLink: "",
      iconTextColor: "text-gray-900",
      sectionBackgroundColor: "bg-gray-100",
    },
    form: [
      { name: "logoSrc", type: "file", label: "Logo" },
      { name: "email", type: "text", label: "E-mail" },
      { name: "whatsappLink", type: "text", label: "Link do WhatsApp" },
      { name: "instagramLink", type: "text", label: "Link do Instagram" },
      { name: "iconTextColor", type: "color", label: "Cor dos ícones" },
      {
        name: "sectionBackgroundColor",
        type: "color",
        label: "Cor de Fundo da seção",
      },
    ],
  },
];
