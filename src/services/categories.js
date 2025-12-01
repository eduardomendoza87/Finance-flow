import { supabase } from "../config/supabaseClient";


//Obtener categoria por id
export const getCategoryById = async (id) => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('id', id)
    .single(); 

  if (error) throw error;
  return data;
};


// 1. Obtener categorías (Gastos e Ingresos) del usuario actual
export const getCategories = async (userId) => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('user_id', userId) // Solo las de este usuario
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data;
};

// 2. Crear nueva categoría
export const createCategory = async (categoryData) => {
  const { data, error } = await supabase
    .from('categories')
    .insert([categoryData])
    .select();

  if (error) throw error;
  return data[0];
};

// 3. Actualizar categoría
export const updateCategory = async (id, updates) => {
  const { data, error } = await supabase
    .from('categories')
    .update(updates)
    .eq('id', id)
    .select();

  if (error) throw error;
  return data[0];
};

// 4. Eliminar categoría
export const deleteCategory = async (id) => {
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id);

  if (error) throw error;
  return true;
};