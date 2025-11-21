<template>
  <div class="song-registration">
    <h1 class="text-2xl font-bold mb-6">Enregistrement de Chant</h1>
    
    <form @submit.prevent="saveSong" class="space-y-4">
      <div class="form-group">
        <label for="title" class="block text-sm font-medium mb-1">Titre</label>
        <input 
          id="title" 
          v-model="song.title" 
          type="text" 
          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="author" class="block text-sm font-medium mb-1">Auteur</label>
        <input 
          id="author" 
          v-model="song.author" 
          type="text" 
          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>
      
      <div class="form-group">
        <label for="category" class="block text-sm font-medium mb-1">Catégorie</label>
        <select 
          id="category" 
          v-model="song.category" 
          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
        >
          <option value="">Sélectionner une catégorie</option>
          <option value="louange">Louange</option>
          <option value="adoration">Adoration</option>
          <option value="meditation">Méditation</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="lyrics" class="block text-sm font-medium mb-1">Paroles</label>
        <textarea 
          id="lyrics" 
          v-model="song.lyrics" 
          rows="10" 
          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
          required
        ></textarea>
      </div>
      
      <div class="form-group">
        <label class="block text-sm font-medium mb-1">Fichier Audio (optionnel)</label>
        <div class="flex items-center space-x-2">
          <button 
            type="button" 
            @click="$refs.audioInput.click()" 
            class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Choisir un fichier
          </button>
          <span v-if="audioFile" class="text-sm">{{ audioFile.name }}</span>
          <span v-else class="text-sm text-gray-500">Aucun fichier sélectionné</span>
        </div>
        <input 
          ref="audioInput" 
          type="file" 
          @change="handleAudioFile" 
          accept="audio/*" 
          class="hidden"
        />
      </div>
      
      <div class="form-group">
        <label class="block text-sm font-medium mb-1">Lien Vidéo YouTube (optionnel)</label>
        <input 
          v-model="song.videoUrl" 
          type="url" 
          placeholder="https://www.youtube.com/watch?v=..."
          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>
      
      <div class="mt-6">
        <button 
          type="submit" 
          class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting">Enregistrement...</span>
          <span v-else>Enregistrer</span>
        </button>
      </div>
    </form>
    
    <div v-if="successMessage" class="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
      {{ successMessage }}
    </div>
    
    <div v-if="errorMessage" class="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// État du formulaire
const song = reactive({
  title: '',
  author: '',
  category: '',
  lyrics: '',
  videoUrl: ''
});

const audioFile = ref(null);
const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

// Gestion du fichier audio
const handleAudioFile = (event) => {
  const file = event.target.files[0];
  if (file) {
    audioFile.value = file;
  }
};

// Soumission du formulaire
const saveSong = async () => {
  try {
    isSubmitting.value = true;
    errorMessage.value = '';
    
    // Création d'un FormData pour envoyer les données et le fichier
    const formData = new FormData();
    formData.append('title', song.title);
    formData.append('author', song.author);
    formData.append('category', song.category);
    formData.append('lyrics', song.lyrics);
    formData.append('videoUrl', song.videoUrl);
    
    if (audioFile.value) {
      formData.append('audioFile', audioFile.value);
    }
    
    // Simulation d'une requête API (à remplacer par votre appel API réel)
    // Dans un projet Laravel/Inertia, vous utiliseriez probablement:
    // await axios.post('/api/songs', formData);
    
    // Simulation d'un délai de traitement
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Réinitialisation du formulaire après succès
    Object.keys(song).forEach(key => {
      song[key] = '';
    });
    audioFile.value = null;
    
    successMessage.value = 'Le chant a été enregistré avec succès!';
    setTimeout(() => {
      successMessage.value = '';
    }, 5000);
    
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement:', error);
    errorMessage.value = 'Une erreur est survenue lors de l\'enregistrement du chant.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.song-registration {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

/* Variables de couleurs personnalisées */
:root {
  --color-primary: #4f46e5;
  --color-primary-dark: #4338ca;
}

/* Utilisation des variables */
.bg-primary {
  background-color: var(--color-primary);
}

.bg-primary-dark {
  background-color: var(--color-primary-dark);
}

.text-primary {
  color: var(--color-primary);
}

.focus\:ring-primary:focus {
  --tw-ring-color: var(--color-primary);
}

.focus\:border-primary:focus {
  border-color: var(--color-primary);
}
</style>
